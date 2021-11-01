import React, { useEffect, useRef, useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SelectColours from './SelectColours.js'

function Module3({ Item, filterColours, colours, setColours }) {
    return(
        <Container fluid>
            <Row>
                <Col xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                                <Item>
                                    <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                        Placeholder for Module 3
                                    </Typography>
                                    <br></br>
                                    <SelectColours filterColours={ filterColours } colours={ colours } setColours={ setColours } />
                                </Item>
                        </Grid>
                    </Grid>
                </Col>
            </Row>
        </Container>
    )
}

export default Module3