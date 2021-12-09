import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import bee_image from "./Images/DSCN0129-bowen.jpg";

function Module1({ Item, handleNext }) {
    return(
    <Container fluid>
        <Row>
            <Col xs={12}>
                <Grid container spacing={3}>
                    <Grid item md={6} sm={12}>
                            <Item>
                                <Typography variant="body1" component="div" spacing={3} sx={{ flexGrow: 1 }}>
                                    Welcome to Pollinator Partnership Canada's Pollinator Plant Selection Tool, <em>Find Your Roots</em>. The tool is based on the lists of native plants that support pollinators from our <a style={{ color: '#6D8764' }} href="https://pollinatorpartnership.ca/en/ecoregional-planting-guides" target="_blank">Ecoregional Planting guide series</a>. Guides contain detailed information on pollinators, how to help them, and feature specific ecoregional information. Use this tool to make it easier to create customized plant lists for your region and requirements.
                                </Typography>
                                <br></br>
                                <Typography variant="body1" component="div" spacing={3} sx={{ flexGrow: 1 }}>
                                    You can create your plant list by first selecting your region, using the first 3 digits of your postal code or selecting your location on a map. Then, you will be able to filter plants based on your pollinator planting needs. It’s easy and fun, and the bees and butterflies will thank you!
                                </Typography>
                                <br></br>
                                <Typography variant="body1" component="div" spacing={3} sx={{ flexGrow: 1 }}>
                                    For App feedback contact Pollinator Partnership Canada at <a style={{ color: '#6D8764' }} href="mailto: info@pollinatorpartnership.ca">info@pollinatorpartnership.ca</a>.
                                </Typography>
                                <br></br>
                                <Typography variant="body1" component="div" spacing={3} sx={{ flexGrow: 1 }}>
                                    Funding for this plant selector tool was provided by <a style={{ color: '#6D8764' }} href="https://www.syngenta.ca/" target="_blank">Syngenta Canada Inc.</a>.
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} >
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button variant="outlined" sx={{ color: "#4D4F53", borderColor: "#4D4F53" }} onClick={handleNext}>
                                        Next: Select region
                                    </Button>
                                </Box>
                            </Item>
                    </Grid>
                    <Grid item md={6} sm={12} style={{ paddingLeft: 20, paddingTop: 20, paddingBottom: 20 }}>
                        <img src={bee_image} width="100%" style={{ borderRadius: 50 }} />
                    </Grid>
                </Grid>
            </Col>
        </Row>
    </Container>
    )
}

export default Module1