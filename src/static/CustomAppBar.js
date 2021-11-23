import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logo from './Images/Logo-ClearBkgrnd.png';
import beelogo from './Images/beelogo.png';

function CustomAppBar({ screenSize }) {

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
              <Col xs={0} sm={2}>
                <Box>
                  <img src={beelogo} width="100%" style={{ paddingRight: 20 }} />
                </Box>
              </Col>
              <Col xs={12} sm={10}>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h2" sx={{ flexGrow: 1 }} style={{ fontSize:"6vw" }}>
                      Find Your Roots
                  </Typography>
                  {screenSize > 500 ? (<Typography variant="h6" sx={{ flexGrow: 1 }} style={{ fontSize:"2vw" }}>
                    A tool for creating pollinator-friendly native plant lists for your habitat project
                  </Typography>) : (<></>) }
                </Box>
              </Col>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

  export default CustomAppBar;
  