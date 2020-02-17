import React from "react"

import { connectSearchBox, SearchBox } from "react-instantsearch-dom"

// Material Ui
import InputBase from "@material-ui/core/InputBase"

const SearchInput = ({ currentRefinement, refine, isSearchStalled }) => {
  return (
    <>
      <form noValidate action="" role="search">
        <InputBase
          className="search__input"
          type="search"
          value={currentRefinement}
          onChange={event => refine(event.currentTarget.value)}
          placeholder={"Search "}
          color="primary"
          margin="dense"
        >
          <button onClick={() => refine("")}>Reset query</button>
          {isSearchStalled ? "My search is stalled" : ""}
        </InputBase>
      </form>
    </>
  )
}

export const SearchBoxInput = connectSearchBox(SearchBox)
