import React, { Component } from "react"
import { Link } from "gatsby"

import "./search.css"

// Material Ui
import InputBase from "@material-ui/core/InputBase"
import TextField from "@material-ui/core/TextField"
import SearchIcon from "@material-ui/icons/Search"
import Paper from "@material-ui/core/Paper"

// Search component
class Search extends Component {
  state = {
    query: "",
    results: [],
  }

  render() {
    const ResultList = () => {
      if (this.state.results.length > 0) {
        return this.state.results.map((page, i) => (
          <div className="item-search" key={i}>
            <Link to={page.url} className="link">
              <h4>{page.title}</h4>
            </Link>
          </div>
        ))
      } else if (this.state.query.length > 2) {
        return "No results for " + this.state.query
      } else if (
        this.state.results.length === 0 &&
        this.state.query.length > 0
      ) {
        return "Please insert at least 3 characters"
      } else {
        return ""
      }
    }

    return (
      <div className={this.props.classNames}>
        <Paper variant="outlined" square elevation={6}>
          <SearchIcon fontSize="inherit" className="searchIcon" />
          <InputBase
            className="search__input"
            type="search"
            onChange={this.search}
            placeholder={"Search"}
            color="primary"
            margin="dense"
          />
          <div className="search__list">
            <ResultList />
          </div>
        </Paper>
      </div>
    )
  }

  getSearchResults(query) {
    var index = window.__FLEXSEARCH__.en.index
    var store = window.__FLEXSEARCH__.en.store
    if (!query || !index) {
      return []
    } else {
      var results = []
      Object.keys(index).forEach(idx => {
        results.push(...index[idx].values.search(query))
      })

      results = Array.from(new Set(results))

      var nodes = store
        .filter(node => (results.includes(node.id) ? node : null))
        .map(node => node.node)

      return nodes
    }
  }

  search = event => {
    const query = event.target.value
    if (this.state.query.length > 2) {
      const results = this.getSearchResults(query)
      this.setState({ results: results, query: query })
    } else {
      this.setState({ results: [], query: query })
    }
  }
}

export default Search
