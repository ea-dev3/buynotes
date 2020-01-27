import React from "react"

import { useIdentityContext } from "react-netlify-identity-widget"

import NoteCard from "./components/NoteCard"
import AccountingSvg from "../images/accounting.svg"
import EconomicsSvg from "../images/economics.svg"

function Main() {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const { user } = useIdentityContext()
  const [err, setErr] = React.useState("")

  const handleClick = e => {
    e.preventDefault()
    setLoading(true)
    fetch("/.netlify/functions/auth-hello", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.token.access_token,
      },
    })
      .then(response => response.json())
      .then(json => {
        setLoading(false)
        setData(json)
      })
      .catch(err => {
        if (window.location.origin === "http://localhost:8000")
          setErr(
            'your origin is "http://localhost:8000". You are likely not using Netlify Dev so the functions server isnt running. Please read the docs, use Netlify Dev, and go to http://localhost:8888'
          )
        else setErr(err)
        throw err
      })
  }

  return (
    <>
      <NoteCard
        title="Introduction to Accounting"
        chapters="14"
        src={AccountingSvg}
        link="/"
      />

      <NoteCard
        title="Introduction to Microeconomics"
        chapters="17"
        src={EconomicsSvg}
        link="/"
      />

      {/**
     * 
      <h1>Your Main App</h1>
      <ul>
        <li>API: {user.api && user.api.apiURL}</li>
        <li>ID: {user.id}</li>
      </ul>
      <hr />

      <button onClick={handleClick}>
        {loading ? "Loading..." : "Call Lambda Function"}
      </button>
      {err && <pre>{JSON.stringify(err, null, 2)}</pre>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
     */}
    </>
  )
}

export default Main
