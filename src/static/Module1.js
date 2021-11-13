import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import bee_image from "./Images/honey_bee_black_eyed_susan3_Tiffani_Harrison.JPG";

function Module1({ Item }) {
    return(
    <Container fluid>
        <Row>
            <Col xs={12}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                            <Item>
                                <Typography variant="body1" component="div" spacing={3} sx={{ flexGrow: 1 }}>
                                    Welcome to Pollinator Partnership Canada's Pollinator Plant Selection Tool, <em>Find Your Roots</em>. The tool is based on the lists of native plants that support pollinators from our <a href="https://pollinatorpartnership.ca/en/ecoregional-planting-guides" target="_blank">Ecoregional Planting guide series</a>. Guides contain detailed information on pollinators, how to help them, and feature specific ecoregional information. Use this tool to make it easier to create customized plant lists for your region and requirements.
                                </Typography>
                                <br></br>
                                <Typography variant="body1" component="div" spacing={3} sx={{ flexGrow: 1 }}>
                                    You can create your plant list by first selecting your region, using the first 3 digits of your postal code or selecting your location on a map. Then, you will be able to filter plants based on your pollinator planting needs. It’s easy and fun, and the bees and butterflies will thank you!
                                </Typography>
                                <br></br>
                                <Typography variant="body1" component="div" spacing={3} sx={{ flexGrow: 1 }}>
                                    For App feedback contact Lora Morandin, Research and Conservation Director, Pollinator Partnership at <a href="mailto: LM@pollinator.org">LM@pollinator.org</a>.
                                </Typography>
                            </Item>
                    </Grid>
                    <Grid item xs={6} style={{ padding: 20 }}>
                        <img src={bee_image} width="100%" style={{ marginRight: 20, borderRadius: 50 }} />
                    </Grid>
                </Grid>
            </Col>
        </Row>
    </Container>
    )
}

export default Module1