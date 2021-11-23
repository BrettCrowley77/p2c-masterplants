import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = ['Welcome!', 'Select your ecoregion', 'Filter by plant characteristics', 'Find your plants'];

export default function HorizontalLinearStepper({ activeStep, setActiveStep, handleNext, handleBack, handleStep, handleReset }) {

    const theme = useTheme();
    
    const maxSteps = steps.length;

  return (
    <MobileStepper
        variant="text"
        position="static"
        nonLinear
        steps={maxSteps}
        activeStep={activeStep}
        nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
      >
      </MobileStepper>
  )
}
