import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Module1({ Item }) {
    return(
    <Container fluid>
        <Row>
            <Col xs={12}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                            <Item>
                                <Typography variant="body2" component="div" spacing={3} sx={{ flexGrow: 1 }}>
                                    Welcome to Pollinator Partnership Canada's Pollinator Plant Selection Tool, Plant Me! The tool is based on the lists of native plants that support pollinators from our Ecoregional Planting guide series. Guides contain detailed information on pollinators, how to help them, and feature specific ecoregional information. Use this tool to make it easier to create customized plant lists for your region and requirements.
                                </Typography>
                                <br></br>
                                <Typography variant="body2" component="div" spacing={3} sx={{ flexGrow: 1 }}>
                                    You can create your plant list by first selecting your region, using the first 3 digits of your postal code (or clicking on the map if we retain that option). Then, you will be able to filter plants based on your pollinator planting needs. It’s easy and fun, and the bees and butterflies will thank you!
                                </Typography>
                                <br></br>
                                <Typography variant="body2" component="div" spacing={3} sx={{ flexGrow: 1 }}>
                                    For App feedback contact Lora Morandin, Research and Conservation Director, Pollinator Partnership at LM@pollinator.org
                                </Typography>
                            </Item>
                    </Grid>
                </Grid>
            </Col>
        </Row>
    </Container>
    )
}

export default Module1