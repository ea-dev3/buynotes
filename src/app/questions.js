import React from "react"

// Material Ui

import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import StepContent from "@material-ui/core/StepContent"
import Button from "@material-ui/core/Button"

import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    padding: theme.spacing(0),
    margin: theme.spacing(0),
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(1),
  },
  resetContainer: {
    padding: theme.spacing(2),
  },
  textField: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "90%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

function getSteps() {
  return ["Question 1", "Question 2", "Question 3", "Question 4 ", "Question 5"]
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <p>Demo Feature still in development </p>
        </>
      )

    case 1:
      return (
        <>
          <p>Demo Feature still in development </p>
        </>
      )
    case 2:
      return (
        <>
          <p>Demo Feature still in development </p>
        </>
      )
    case 3:
      return `Demo Feature still in development `
    default:
      return "Demo Feature still in development"
  }
}

export default function Questions() {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const [unit, setUnit] = React.useState("")
  const steps = getSteps()

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  const handleChange = event => {
    setUnit(event.target.value)
  }

  return (
    <Paper className={classes.root}>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={unit}
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value="" disabled>
            Courses
          </MenuItem>
          <MenuItem value="Macroeconomics "> Macroeconomics</MenuItem>
          <MenuItem value="Microeconomics "> Microeconomics</MenuItem>
          <MenuItem value="Accounting "> Accounting</MenuItem>
          <MenuItem value="Toursm "> Toursm</MenuItem>
        </Select>
        <FormHelperText>Select Unit </FormHelperText>
      </FormControl>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <>{getStepContent(index)}</>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    type="submit"
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>Congratulations</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </Paper>
  )
}
