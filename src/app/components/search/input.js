import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"

// Material Ui
import InputBase from "@material-ui/core/InputBase"
import SearchIcon from "@material-ui/icons/Search"
import Paper from "@material-ui/core/Paper"

export default connectSearchBox(({ refine, ...rest }) => (
  <form>
    <Paper variant="outlined" square elevation={6}>
      <InputBase
        className="search__input"
        type="search"
        placeholder={"Search"}
        color="primary"
        margin="dense"
        aria-label="Search"
        onChange={e => refine(e.target.value)}
        {...rest}
      />
      <SearchIcon />
    </Paper>
  </form>
))
