import React from "react"

import AppSvg from "../images/app.svg"
import AboutSvg from "../images/about.svg"
import EarnCashSvg from "../images/cash.svg"
import AdsSvg from "../images/advert.svg"

import Layout from "../components/layout"

import SEO from "../components/seo"

// Material Ui

import Grid from "@material-ui/core/Grid"
import CardButton from "../app/components/CardButton"
import AdsCard from "../app/components/AdsCard"

class IndexPage extends React.Component {
  state = { loading: false, msg: null }
  handleClick = e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/token-hider")
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.message }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <div>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <CardButton route="App" src={AppSvg} link="/app/" />
            </Grid>

            <Grid item xs={12} sm={6}>
              <CardButton route="About" src={AboutSvg} link="/about/" />
            </Grid>

            <Grid item xs={12} sm={6}>
              <CardButton
                route="Earn Cash"
                src={EarnCashSvg}
                link="/earn-cash/"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <AdsCard route="Ad" src={AdsSvg} link="/ads/" />
            </Grid>
          </Grid>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
