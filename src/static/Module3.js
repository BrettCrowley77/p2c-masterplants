import React, { useEffect, useRef, useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SelectFilter from './SelectFilter.js'
import SelectSeason from './SelectSeason.js'

const paperStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
    typography: {
        fontFamily: "'Montserrat', sans-serif",
    }
  }));

function Module3({ Item, filterPollinators, pollinators, setPollinators, filterColours, colours, setColours, filterSoilMoisture, soilMoisture, setSoilMoisture, filterSunExposure, sunExposure, setSunExposure,
                    dates, dateSlider, setDateSlider, minDateValue, maxDateValue, minDate, maxDate, setMinDate, setMaxDate, wrapperSetDateSlider, handleDateChange }) {

    const paperClasses = paperStyles();

    return(
        <Container fluid>
            <Row>
                <Col md={12} lg={4} style={{ paddingBottom: 20 }} >
                    <Paper className={paperClasses.paper}>
                        <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                        Now that we’ve generated a list of native plants that will support pollinators in
                        your ecoregion, click 'Next' to go to the plant list or choose
                        some filters to refine and customize your list to your planting area and preferences.
                        We recommend customizing the 'Sun Requirements' and 'Soil Moisture' filters to suit
                        your growing conditions. The other filters are optional based on your preferences.
                        </Typography>
                    </Paper>
                </Col>
                <Col md={12} lg={8} style={{ paddingBottom: 20 }} >
                    <Paper className={paperClasses.paper}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} lg={6}>
                                    <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                        <b>(Recommended)</b> Choose one or more soil moisture states:
                                    </Typography>
                                    <br></br>
                                    <Item>
                                        <SelectFilter filterOptions={ filterSoilMoisture } stateVar={ soilMoisture } setStateVar={ setSoilMoisture } placeholder={ "(Soil moisture)" } />
                                    </Item>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                    <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                        <b>(Recommended)</b> Choose one or more sun exposure levels:
                                    </Typography>
                                    <br></br>
                                    <Item>
                                        <SelectFilter filterOptions={ filterSunExposure } stateVar={ sunExposure } setStateVar={ setSunExposure } placeholder={ "(Sun exposure)" } />
                                    </Item>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                    <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                        Choose one or more pollinators:
                                    </Typography>
                                    <br></br>
                                    <Item>
                                        <SelectFilter filterOptions={ filterPollinators } stateVar={ pollinators } setStateVar={ setPollinators } placeholder={ "(Pollinator)" } />
                                    </Item>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                    <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                        Choose one or more flower colours:
                                    </Typography>
                                    <br></br>
                                    <Item>
                                        <SelectFilter filterOptions={ filterColours } stateVar={ colours } setStateVar={ setColours } placeholder={ "(Flower colour)" } />
                                    </Item>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                    Choose bloom season:
                                </Typography>
                                <br></br>
                                <SelectSeason dates={ dates } dateSlider={ dateSlider } setDateSlider={ setDateSlider } minDateValue={ minDateValue } maxDateValue={ maxDateValue }
                                                    minDate={ minDate } maxDate={ maxDate } setMinDate={ setMinDate } setMaxDate={ setMaxDate } wrapperSetDateSlider={ wrapperSetDateSlider }
                                                    handleDateChange={ handleDateChange } />    
                            </Grid>
                        </Grid>
                    </Paper>
                </Col>
            </Row>
        </Container>
    )
}

export default Module3