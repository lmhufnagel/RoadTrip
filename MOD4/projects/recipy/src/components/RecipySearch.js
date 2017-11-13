import React from 'react'

const RecipySearch = (props) => {
  return (
    <div>
      <p>Search recipes</p>
      <input
        type="text"
        placeholder={"Search"}
        onChange={props.handleChange}
        value={props.searchTerm}
      />

    </div>
  )
}

export default RecipySearch
