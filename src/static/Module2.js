import React, { useEffect, useRef, useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CustomMap from './CustomMap.js'
import SelectGeography from './SelectGeography.js'

function Module2({ Item, activeStep, geography, setGeography, codes, setCodes, map, getUniqueFeatures, ecoregions, idList, postalcodes }) {

    return(
        <Container fluid>
            <Row>
                <Col xs={12} md={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                                <Item>
                                    <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                        Placeholder for Module 2
                                    </Typography>
                                    <br></br>
                                    <SelectGeography activeStep={ activeStep } geography={ geography } setGeography={ setGeography } codes={ codes } setCodes={ setCodes }  map={ map } getUniqueFeatures={ getUniqueFeatures } ecoregions={ ecoregions } idList={ idList } postalcodes={ postalcodes }/>
                                </Item>
                        </Grid>
                    </Grid>
                </Col>
                <Col xs={12} md={9}>
                    <Paper>
                        <CustomMap activeStep={ activeStep } geography={ geography } setGeography={ setGeography } map={ map } ecoregions={ ecoregions } postalcodes={ postalcodes } codes={ codes } setCodes={ setCodes }/>
                    </Paper>
                </Col>
            </Row>
        </Container>
    )
}

export default Module2