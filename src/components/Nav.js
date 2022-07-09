import React from 'react'

function Nav(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type="text" placeholder='search' value={props.movies} onChange={props.handleChange}/>
        <button type="submit">search</button>
      </form>
    </div>
  )
}

export default Nav