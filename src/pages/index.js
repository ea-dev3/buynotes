import React from "react"
import { Link } from "gatsby"

import AppSvg from "../images/app.svg"
import AboutSvg from "../images/about.svg"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

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

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: 100,
          }}
        >
          <div>
            <Link to="/app/"> App</Link>{" "}
            <img src={AppSvg} width="200" height="200" />
            <Link to="/page-2/"> About</Link>{" "}
            <img src={AboutSvg} width="200" height="200" />
            {/**
            <hr />
            <p>
            <a href="/.netlify/functions/token-hider">
            <code>/.netlify/functions/token-hider</code>
            </a>
            * 
            and it uses an API_SECRET environment variable that is hidden from
            the frontend!
            </p>
            <button onClick={this.handleClick}>
            {loading ? "Loading..." : "Call Lambda Function"}
            </button>
            <br />
            
            {msg ? (
              <img src={msg[Math.floor(Math.random() * 10)]} alt="dog"></img>
              ) : (
                <pre>"Click the button and watch this!"</pre>
                )}
              */}
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
