import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Materilal Ui
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Paper from "@material-ui/core/Paper"
import PhoneIcon from "@material-ui/icons/PhoneAndroid"
import GavelIcon from "@material-ui/icons/Gavel"
import UsIcon from "@material-ui/icons/BusinessCenter"
import Grid from "@material-ui/core/Grid"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={2}>{children}</Box>}
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "75vh",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  span: {
    fontSize: "0.8rem",
    display: "flex",
    flexGrow: 1,
  },
}))

export default function About() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Layout>
      <SEO title="About"></SEO>
      <Paper>
        <div>
          <Grid container className={classes.root}>
            <Grid item xs={3}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="About"
                className={classes.tabs}
                indicatorColor="primary"
                textColor="primary"
                scrollButtons="auto"
              >
                <Tab
                  label="Usage"
                  {...a11yProps(0)}
                  icon={<PhoneIcon />}
                  aria-label="usage"
                />
                <Tab
                  label="Legal"
                  {...a11yProps(1)}
                  icon={<GavelIcon />}
                  aria-label="legal"
                />
                <Tab
                  label="Us"
                  {...a11yProps(2)}
                  icon={<UsIcon />}
                  aria-label="about us"
                />
              </Tabs>
            </Grid>
            <Grid item xs={9}>
              <TabPanel value={value} index={0}>
                Usage <br></br>
                <br></br>
                <span className={classes.span}>
                  <ol>
                    <li> Login or Sign up </li>
                    <li> Go to main </li>
                    <li> Select notes you want to read </li>
                  </ol>
                </span>
              </TabPanel>
              <TabPanel value={value} index={1}>
                Terms and Conditions <br></br>
                <br></br>
                <span className={classes.span}>
                  Please read these Terms and Conditions carefully before using
                  the buynotes.co website and the mobile application operated by
                  us. Your access to and use of the Service is conditioned on
                  your acceptance of and compliance with these Terms. These
                  Terms apply to all visitors, users and others who access or
                  use the Service. By accessing or using the Service you agree
                  to be bound by these Terms. If you disagree with any part of
                  the terms then you may not access the Service.
                </span>
              </TabPanel>
              <TabPanel value={value} index={2}>
                About Us <br></br>
                <br></br>
                <span className={classes.span}>
                  We are an education company with the goal of improving
                  learning by providing access to study materials and
                  information
                </span>
              </TabPanel>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </Layout>
  )
}
