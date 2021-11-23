import React, { useEffect, useRef, useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CustomMap from './CustomMap.js'
import SelectGeography from './SelectGeography.js'

function Module2({ Item, screenSize, mapZoom, useEffectIf, activeStep, geography, setGeography, codes, setCodes, map, getUniqueFeatures, ecoregions, idList, postalcodes }) {

    return(
        <Container fluid>
            <Row>
                <Col md={12} lg={3} style={{ paddingBottom: 20 }} >
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                                <Item>
                                    <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                                    Plants in this database support pollinators and are native to specific <a href="https://open.canada.ca/data/en/dataset/ade80d26-61f5-439e-8966-73b352811fe6" target="_blank">ecoregions in Canada</a>.
                                    Start your list by getting only the plants that are native to your ecoregion by entering the first 3 digits of your postal code or clicking on your ecoregion on the map.
                                    </Typography>
                                    <br></br>
                                    <SelectGeography activeStep={ activeStep } geography={ geography } setGeography={ setGeography } codes={ codes } setCodes={ setCodes }  map={ map } getUniqueFeatures={ getUniqueFeatures } ecoregions={ ecoregions } idList={ idList } postalcodes={ postalcodes }/>
                                    <br></br>
                                    <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                    Lists are currently available only for the areas in green. If there is no list for your region, select the closest region, and reach out to us about creating a native pollinator plant list for your area!
                                    </Typography>
                                </Item>
                        </Grid>
                    </Grid>
                </Col>
                <Col md={12} lg={9} style={{ paddingBottom: 20 }} >
                    <Paper>
                        <CustomMap activeStep={ activeStep } useEffectIf={useEffectIf} screenSize={screenSize} mapZoom={mapZoom} geography={ geography } setGeography={ setGeography } map={ map } ecoregions={ ecoregions } postalcodes={ postalcodes } codes={ codes } setCodes={ setCodes } getUniqueFeatures={ getUniqueFeatures }/>
                    </Paper>
                </Col>
            </Row>
        </Container>
    )
}

export default Module2