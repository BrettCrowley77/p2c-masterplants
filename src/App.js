import React, { useState, useEffect, useRef, useCallback } from 'react'
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import CustomAppBar from './static/CustomAppBar.js'
import CustomStepper from './static/CustomStepper.js'
import Module1 from './static/Module1.js'
import Module2 from './static/Module2.js'
import Module3 from './static/Module3.js'
import Module4 from './static/Module4.js'

const theme = createTheme({
    palette: {
      primary: {
        main: '#6D8764'
      }
    },
    typography: {
        fontFamily: "'Montserrat', sans-serif",
    }
});

 // Because features come from tiled vector data, feature geometries may be split or duplicated across tile boundaries.
// As a result, features may appear multiple times in query results.
function getUniqueFeatures(features, comparatorProperty) {
    const uniqueIds = new Set();
    const uniqueFeatures = [];
    for (const feature of features) {
    const id = feature.properties[comparatorProperty];
    if (!uniqueIds.has(id)) {
    uniqueIds.add(id);
    uniqueFeatures.push(feature);
    }
    }
    return uniqueFeatures;
}

const ecoregions = require('./data/ecoregions.json')
var postalcodes = require('./data/postalcodes.json')
const rows = require('./data/masterplants.json');
const idList = [0, 98, 99, 101, 107, 112, 124, 127, 128, 130, 132, 134, 135, 156, 157, 158, 159, 162, 188, 189, 191, 192, 193, 194, 195, 196, 202, 203, 205, 209, 210, 211]

const dates = [
  {value: 1, label: "Spring"},
  {value: 2, label: "Early Summer"},
  {value: 3, label: "Late Summer"},
  {value: 4, label: "Autumn"},
]

// const dates = [
//   {value: 1, label: "Jan"},
//   {value: 2, label: "Feb"},
//   {value: 3, label: "Mar"},
//   {value: 4, label: "Apr"},
//   {value: 5, label: "May"},
//   {value: 6, label: "Jun"},
//   {value: 7, label: "Jul"},
//   {value: 8, label: "Aug"},
//   {value: 9, label: "Sep"},
//   {value: 10, label: "Oct"},
//   {value: 11, label: "Nov"},
//   {value: 12, label: "Dec"},
// ]

var filterColours = [
  {id: 1, label: 'blue-purple'},
  {id: 2, label: 'white-cream-pink'},
  {id: 3, label: 'red'},
  {id: 4, label: 'green-brown-inconspicuous'},
  {id: 5, label: 'orange-yellow'},
]

var filterSoilMoisture = [
  {id: 1, label: 'dry'},
  {id: 2, label: 'mesic (normal)'},
  {id: 3, label: 'moist'},
  {id: 4, label: 'wet'},
]

var filterSunExposure = [
  {id: 1, label: 'sun'},
  {id: 2, label: 'partial sun to shade'},
  {id: 3, label: 'shade'},
]

postalcodes = postalcodes.filter(obj => obj.FIELD2.split(', ').map(Number).some(r => idList.includes(r)))

ecoregions.features = ecoregions.features.filter(item => {
  if (idList.filter(id => id === item.properties.ECOREGION).length > 0) {
    return item;
  }
})

const App = () => {

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const [geography, setGeography] = useState([]);
  const [codes, setCodes] = useState([]);
  const map = useRef(null);

  const [colours, setColours] = useState([]);
  const [soilMoisture, setSoilMoisture] = useState([]);
  const [sunExposure, setSunExposure] = useState([]);
  const [rowData, setRowData] = useState(rows);

  const [dateSlider, setDateSlider] = useState([Math.min.apply(Math, dates.map(function(date) { return date.value; })), Math.max.apply(Math, dates.map(function(date) { return date.value; }))]);
  const [minDateValue, setMinDateValue] = useState(Math.min.apply(Math, dates.map(function(date) { return date.value; })))
  const [maxDateValue, setMaxDateValue] = useState(Math.max.apply(Math, dates.map(function(date) { return date.value; })))
  const [minDate, setMinDate] = useState('Early Spring')
  const [maxDate, setMaxDate] = useState('Autumn')

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

  // Define function to conditionally useEffect
  const useEffectIf = (condition, fn, dependencies) => {
    useEffect(() => condition && fn(), dependencies)
  }

  const wrapperSetDateSlider = useCallback(val => {
    setDateSlider(val)
  }, [setDateSlider])

  const handleDateChange = (event, newValue) => {
    setDateSlider(newValue)
  }

  useEffect(() => {

    if ([0, 2, 3].includes(activeStep)) {

      map.current = null;

    }

  }, [activeStep])

  useEffectIf((soilMoisture, sunExposure, colours, geography), () => {

    var colourList = [...colours.map(obj => obj.label)]
    var soilMoistureList = [...soilMoisture.map(obj => obj.label)]
    var sunExposureList = [...sunExposure.map(obj => obj.label)]

    setRowData(
      rows
      // .filter(row => row.col12 !== null && row.col13 != null && row.col14 != null)
      .filter(row => colours.length > 0 ? row.col16.split(', ').some(r => colourList.includes(r)) : true)
      .filter(row => soilMoisture.length > 0 ? row.col17.split(', ').some(r => soilMoistureList.includes(r)) : true)
      .filter(row => sunExposure.length > 0 ? row.col18.split(', ').some(r => sunExposureList.includes(r)) : true)
      .filter(row => {
        return geography.length > 0 ? geography.includes(row.col19) : true
      }) // If one or more geographies selected filter to geography, otherwise include all geographies
      )

  }, [soilMoisture, sunExposure, colours, geography])

  // Set the minimum and maximum date labels to display on the timeframe selector
  useEffectIf((dates && dateSlider), () => {
    console.log(dateSlider)
    setMinDate(dates.find((date) => date.value === dateSlider[0]).label);
    setMaxDate(dates.find((date) => date.value === dateSlider[1]).label);
  }, [dateSlider])

useEffect(() => {
  console.log(geography)
}, [geography])

  let moduleContent;

  if (activeStep===0) {
    moduleContent = <Module1 Item={ Item }/>
  } else if (activeStep===1) {
    moduleContent = <Module2 Item={ Item } activeStep={ activeStep } geography={ geography } setGeography={ setGeography } codes={ codes } setCodes={ setCodes } map={ map } getUniqueFeatures={ getUniqueFeatures } ecoregions={ ecoregions } idList={ idList } postalcodes={ postalcodes }/>
  } else if (activeStep===2) {
    moduleContent = <Module3 Item={ Item } filterColours={ filterColours } colours={ colours } setColours={ setColours } 
                    filterSoilMoisture={ filterSoilMoisture } soilMoisture={ soilMoisture } setSoilMoisture={ setSoilMoisture } 
                    filterSunExposure={ filterSunExposure } sunExposure={ sunExposure } setSunExposure={ setSunExposure } 
                    dates={ dates } dateSlider={ dateSlider } setDateSlider={ setDateSlider } minDateValue={ minDateValue } maxDateValue={ maxDateValue }
                    minDate={ minDate } maxDate={ maxDate } setMinDate={ setMinDate } setMaxDate={ setMaxDate } wrapperSetDateSlider={ wrapperSetDateSlider }
                    handleDateChange={ handleDateChange }/>
  } else if (activeStep===3) {
    moduleContent = <Module4 Item={ Item } rows={ rows } rowData={ rowData } setRowData={ setRowData }/>
  }

      return (
          <ThemeProvider theme={theme}>
            <CustomAppBar />
            <br></br>
            <CustomStepper activeStep={ activeStep } skipped={ skipped } setActiveStep={ setActiveStep } setSkipped={ setSkipped }/>
            <br></br>
            {moduleContent}
            <br></br>
            <br></br>
          </ThemeProvider>
      )
}

export default App