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

function CustomAppBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box>
                <img src={beelogo} width="200px" style={{ paddingRight: 20 }} />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h2" sx={{ flexGrow: 1 }}>
                  Find Your Roots
              </Typography>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  A guide for finding the most suitable, pollinator-friendly native plants for your region
              </Typography>
            </Box>
            <Box>
                <img src={logo} />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

  export default CustomAppBar;
  