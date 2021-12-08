import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import Slider from '@material-ui/core/Slider';
import Box from '@material-ui/core/Box';

const HeightSliderTheme = createTheme({
    overrides: {
      MuiSlider: {
        root: {
          color: "#6D8764",
          width: "95%",
          height: 8
        },
        active: {},
        markLabel: {
          fontSize: 10
        }
      }
    }
  });

export default function SelectHeight({ heightSlider, setHeightSlider, minHeightValue, maxHeightValue, minHeight, maxHeight }) {

    const handleHeightChange2 = (event, newValue) => {
        setHeightSlider(newValue);
      };

  return (
    <Box style={{ marginLeft: 20, marginRight: 20 }}>
        <ThemeProvider theme={HeightSliderTheme}>
            <Typography id="height-slider" variant="body2" gutterBottom>
            {minHeight == maxHeight ? minHeight : minHeight+" - "+maxHeight}
            </Typography>
            <Slider sx={{ fontSize: 12 }}
            min={minHeightValue}
            max={maxHeightValue}
            step={1}
            size="small"
            defaultValue={heightSlider}
            value={heightSlider}
            onChange={(event, newValue) => {
                handleHeightChange2(event, newValue)
            }}
            valueLabelDisplay="off"
            />
        </ThemeProvider>
     </Box>
    );
}