import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import Slider from '@material-ui/core/Slider';
import Box from '@material-ui/core/Box';

const DateSliderTheme = createTheme({
    overrides: {
      MuiSlider: {
        root: {
          color: "#6D8764",
          width: "95%",
          height: 8
        },
        active: {},
      }
    }
  });

export default function SelectSeason({ dates, dateSlider, setDateSlider, minDateValue, maxDateValue, minDate, maxDate, handleDateChange }) {

    const valuetext = (value) => {
        return `${dates.filter(obj => obj.value == value).label}`;
    }

    const handleDateChange2 = (event, newValue) => {
        setDateSlider(newValue);
      };

  return (
    <Box style={{ marginLeft: 20, marginRight: 20 }}>
        <ThemeProvider theme={DateSliderTheme}>
            <Typography id="date-slider" gutterBottom>
            {minDate == maxDate ? minDate : minDate+" - "+maxDate}
            </Typography>
            <Slider
            min={minDateValue}
            max={maxDateValue}
            step={null}
            marks={dates}
            size="small"
            defaultValue={dateSlider}
            value={dateSlider}
            onChange={(event, newValue) => {
                handleDateChange2(event, newValue)
            }}
            valueLabelDisplay="auto"
            aria-labelledby="date-slider"
    //        valueLabelFormat={valueLabelFormat}
            getAriaValueText={valuetext}
            valueLabelDisplay="off"
            />
        </ThemeProvider>
     </Box>
    );
}