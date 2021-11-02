import React, { useEffect, useRef, useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SelectFilter from './SelectFilter.js'

function Module3({ Item, filterColours, colours, setColours, filterSoilMoisture, soilMoisture, setSoilMoisture, filterSunExposure, sunExposure, setSunExposure }) {
    return(
        <Container fluid>
            <Row>
                <Col xs={12}>
                    <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                    Now that we’ve generated a list of native plants that will support pollinators in
                    your ecoregion, click 'Next' to go to the plant list or choose
                    some filters to refine and customize your list to your planting area and preferences.
                    We recommend customizing the 'Sun Requirements' and 'Soil Moisture' filters to suit
                    your growing conditions. The other filters are optional based on your preferences.
                    </Typography>
                    <br></br>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                                <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                    Choose one or more soil moisture states:
                                </Typography>
                                <br></br>
                                <Item>
                                    <SelectFilter filterOptions={ filterSoilMoisture } stateVar={ soilMoisture } setStateVar={ setSoilMoisture } placeholder={ "Select one or more soil moisture states" } />
                                </Item>
                        </Grid>
                        <Grid item xs={12} md={4}>
                                <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                    Choose one or more sun exposure levels:
                                </Typography>
                                <br></br>
                                <Item>
                                    <SelectFilter filterOptions={ filterSunExposure } stateVar={ sunExposure } setStateVar={ setSunExposure } placeholder={ "Select one or more sun exposure levels" } />
                                </Item>
                        </Grid>
                        <Grid item xs={12} md={4}>
                                <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                    Choose one or more plant colours:
                                </Typography>
                                <br></br>
                                <Item>
                                    <SelectFilter filterOptions={ filterColours } stateVar={ colours } setStateVar={ setColours } placeholder={ "Select one or more colours" } />
                                </Item>
                        </Grid>
                    </Grid>
                </Col>
            </Row>
        </Container>
    )
}

export default Module3