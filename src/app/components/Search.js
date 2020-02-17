import React, { Component } from "react"
import { Link } from "gatsby"

import "./search.css"

// Material Ui

import SearchIcon from "@material-ui/icons/Search"
import CloseIcon from "@material-ui/icons/CloseOutlined"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"

import { NotesHits } from "./Hits"

// Search

import {
  InstantSearch,
  Index,
  Hits,
  connectStateResults,
  SearchBox,
  HitsPerPage,
  Highlight,
  connectHits,
  CurrentRefinements,
  Configure,
  ScrollTo,
  PoweredBy,
} from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"

const searchClient = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_ADMIN_KEY
)

class Search extends Component {
  state = {
    query: "",
    results: [],
    focus: false,
  }

  render() {
    const ResultList = ({ hit }) => {
      if (this.state.results.length > 0) {
        return this.state.results.map((page, i) => (
          <div key={i}>
            <Link to={`/app/notes/${page.url}`} className="link">
              <Typography variant="subtitle1" className="search-txt">
                {page.title}
              </Typography>

              <NotesHits />
            </Link>
          </div>
        ))
      } else if (this.state.query.length > 2) {
        return (
          <Typography variant="caption" color="primary">
            No notes with title {this.state.query}
          </Typography>
        )
      } else if (
        this.state.results.length === 0 &&
        this.state.query.length > 0
      ) {
        return (
          <>
            <Typography variant="caption" color="primary">
              Please insert at least 3 characters
            </Typography>
          </>
        )
      } else {
        return ""
      }
    }

    return (
      <div>
        <InstantSearch indexName="prod_NOTES" searchClient={searchClient}>
          <Configure hitsPerPage={1} distinct analytics={false} />
          <Paper elevation={2} className="container">
            <SearchBox
              onChange={this.search}
              autoFocus
              defaultRefinement=""
              searchAsYouType={true}
              showLoadingIndicator
              submit={<SearchIcon fontSize="inherit" color="primary" />}
              reset={<CloseIcon fontSize="inherit" color="secondary" />}
              loadingIndicator={
                <CircularProgress fontSize="inherit" size={20} />
              }
              onSubmit={event => {
                event.preventDefault()
                console.log(event.currentTarget)
              }}
              onReset={event => {
                console.log(event.currentTarget)
              }}
              translations={{
                submitTitle: "Submit your search query.",
                resetTitle: "Clear your search query.",
                placeholder: "Search Notes Library ",
              }}
              className="search"
            />
            <ResultList />
          </Paper>
        </InstantSearch>
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
