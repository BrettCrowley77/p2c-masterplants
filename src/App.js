import React, { useState, useEffect, useRef } from 'react'
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

var filterColours = [
  {id: 1, label: 'blue'},
  {id: 2, label: 'purple'},
  {id: 3, label: 'white'},
  {id: 4, label: 'cream'},
  {id: 5, label: 'pink'},
  {id: 6, label: 'red'},
  {id: 7, label: 'green'},
  {id: 8, label: 'brown'},
  {id: 9, label: 'inconspicuous'},
  {id: 10, label: 'orange'},
  {id: 11, label: 'yellow'},
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

  const [colours, setColours] = useState(filterColours);
  const [rowData, setRowData] = useState(rows);

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

  useEffect(() => {

    if ([0, 2, 3].includes(activeStep)) {

      map.current = null;

    }

  }, [activeStep])

  useEffectIf((colours), () => {

    var colourList = [...colours.map(obj => obj.label)]
    setRowData(rows.filter(row => row.col13 !== null).filter(row => row.col13.split(', ').some(r => colourList.includes(r))))

  }, [colours])

useEffect(() => {
  console.log(geography)
}, [geography])

  let moduleContent;

  if (activeStep===0) {
    moduleContent = <Module1 Item={ Item }/>
  } else if (activeStep===1) {
    moduleContent = <Module2 Item={ Item } activeStep={ activeStep } geography={ geography } setGeography={ setGeography } codes={ codes } setCodes={ setCodes } map={ map } getUniqueFeatures={ getUniqueFeatures } ecoregions={ ecoregions } idList={ idList } postalcodes={ postalcodes }/>
  } else if (activeStep===2) {
    moduleContent = <Module3 Item={ Item } filterColours={ filterColours } colours={ colours } setColours={ setColours }/>
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
          </ThemeProvider>
      )
}

export default App