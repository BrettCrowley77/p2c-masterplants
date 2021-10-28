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
const idList = [0, 98, 99, 101, 107, 112, 124, 127, 128, 130, 132, 134, 135, 156, 157, 158, 159, 162, 188, 189, 191, 192, 193, 194, 195, 196, 202, 203, 205, 209, 210, 211]

console.log(postalcodes.length)

postalcodes = postalcodes.filter(obj => obj.FIELD2.split(', ').map(Number).some(r => idList.includes(r)))

console.log(postalcodes.length)

ecoregions.features = ecoregions.features.filter(item => {
  if (idList.filter(id => id === item.properties.ECOREGION).length > 0) {
    return item;
  }
})

const App = () => {

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const [geography, setGeography] = useState([]);
  const [codes, setCodes] = useState([])
  const map = useRef(null);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {

    if ([0, 2, 3].includes(activeStep)) {

      map.current = null;

    }

  }, [activeStep])

  useEffect(() => {
    var uniqueIds = []

    if (codes.length > 0) {

        for (var i in codes) {
            uniqueIds = [...uniqueIds, ...codes[i].FIELD2.split(', ')].map(Number)
        }

        uniqueIds = [... new Set(uniqueIds)].filter(obj => idList.includes(obj))

    }

    setGeography(uniqueIds)

}, [codes])

// useEffect(() => {
//   console.log(geography)
// }, [geography])

  let moduleContent;

  if (activeStep===0) {
    moduleContent = <Module1 Item={ Item }/>
  } else if (activeStep===1) {
    moduleContent = <Module2 Item={ Item } activeStep={ activeStep } geography={ geography } setGeography={ setGeography } codes={ codes } setCodes={ setCodes } map={ map } getUniqueFeatures={ getUniqueFeatures } ecoregions={ ecoregions } idList={ idList } postalcodes={ postalcodes }/>
  } else if (activeStep===2) {
    moduleContent = <Module3 Item={ Item } />
  } else if (activeStep===3) {
    moduleContent = <Module4 Item={ Item } />
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