import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Welcome!', 'Select your ecoregion', 'Filter by plant characteristics', 'View plant list'];

export default function HorizontalLinearStepper({ activeStep, setActiveStep, handleNext, handleBack, handleStep, handleReset }) {

  return (
    <Box sx={{ width: '100%', paddingLeft: 10, paddingRight: 10 }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepButton onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            {(activeStep !== 0) && (
              <Button
              variant="outlined"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1, color: "#4D4F53", borderColor: "#4D4F53" }}
            >
              Back
            </Button>
            )}
            <Box sx={{ flex: '1 1 auto' }} />
            {(activeStep !== steps.length - 1) && (
              <Button variant="outlined" sx={{ color: "#4D4F53", borderColor: "#4D4F53" }} onClick={handleNext}>
                Next
              </Button>
            )}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
