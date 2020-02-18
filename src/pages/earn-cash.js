import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Material Ui

import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import StepContent from "@material-ui/core/StepContent"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

import Grid from "@material-ui/core/Grid"

// import { TextField } from "formik-material-ui"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    padding: theme.spacing(1),
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
}))

function getSteps() {
  return [
    "Fill registration Form",
    "Upload Document",
    "Wait for payment upon approval ",
  ]
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <form>
            <br />
            <Grid container>
              <Grid item lg={6}>
                <TextField
                  id="filled-basic"
                  label="Full Name "
                  variant="standard"
                  type="input"
                />
              </Grid>
              <br />
              <br />
              <Grid item lg={6}>
                <TextField
                  id="filled-email"
                  label="Email"
                  variant="standard"
                  type="email"
                />
              </Grid>
              <br />
              <br />
              <Grid item lg={12}>
                <TextField
                  id="filled-phone"
                  label="Phone"
                  variant="standard"
                  type="tel"
                />
              </Grid>
              <br />
              <br />
              <Grid item lg={6}>
                <TextField
                  id="filled-unit-title"
                  label="Unit Title"
                  variant="standard"
                  type="text"
                />
              </Grid>
              <br />
              <br />
              <Grid item lg={6}>
                <TextField
                  id="filled-chapter-title"
                  label="Chapter Title"
                  variant="standard"
                  type="text"
                />
              </Grid>
            </Grid>
            <br />
            <br />
          </form>
        </>
      )

    case 1:
      return (
        <>
          <form>
            <TextField variant="standard" type="file"></TextField>
          </form>
        </>
      )
    case 2:
      return `Payment will be recieved via Mpesa or PayPal after notes are approved and used in the app. `
    default:
      return "Unknown step"
  }
}

export default function EarnCash() {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
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

  return (
    <Layout>
      <SEO title="Earn cash" />
      <Paper className={classes.root}>
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
            <Typography>All steps completed</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </Paper>
    </Layout>
  )
}
