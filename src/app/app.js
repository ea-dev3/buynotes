import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import NavBar from "./components/NavBar"
import Profile from "./profile"
import Notes from "./notes"
import Main from "./main"
import PrivateRoute from "./components/PrivateRoute"
import Login from "./login"
import Questions from "./questions"

const App = () => {
  return (
    <>
      <Layout>
        <NavBar />
        <Router>
          {/** change this */}
          <PrivateRoute path="/app/profile" component={Profile} />
          <PrivateRoute path="/app/questions" component={Questions} />
          <PrivateRoute path="/app/notes" component={Notes} />
          <PublicRoute path="/app">
            <PrivateRoute path="/" component={Main} />
            <Login path="/login" />
          </PublicRoute>
        </Router>
      </Layout>
    </>
  )
}
function PublicRoute(props) {
  return <div>{props.children}</div>
}

export default App
