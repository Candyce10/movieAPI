import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import MovieList from "./components/MovieList";


function App() {

  const[movie, setMovie] = useState('')

  fetch(`http://www.omdbapi.com/?s=star&apikey=e645ac38`)
      .then((res)=> console.log(res.json()));
  

  function handleChange(e){
    setMovie(e.target.value)
  }

  return (
    <div className="container-fluid movie-app">
      <form>
        <input type="text" value={movie} onChange={handleChange}/>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
export default App;
