import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import logo from './Logo-ClearBkgrnd.png';

function CustomAppBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h2" sx={{ flexGrow: 1 }}>
                Find Your Roots
            </Typography>
            <Box sx={{marginTop: 3}}>
                <img src={logo} />
            </Box>
          </Toolbar>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                A guide for finding the most suitable, pollinator-friendly native plants for your region
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

  export default CustomAppBar;
  