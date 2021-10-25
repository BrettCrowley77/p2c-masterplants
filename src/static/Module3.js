import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Module3({ Item }) {
    return(
        <Paper>
        <Box sx={{padding: 2}}>
            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
            Placeholder for Module 3
            </Typography>
        </Box>
    </Paper>
    )
}

export default Module3