import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import MovieList from "./components/MovieList"
import Nav from "./components/Nav"
import { Routes , Route, useNavigate } from "react-router-dom"
import Results from "./components/Results"




function App() {
  let navigate = useNavigate()

  const [movies, setMovies] = useState([])
  const [results, setResults] = useState([])

 

function fetchData(){
  fetch(`http://www.omdbapi.com/?s=${movies}&apikey=e645ac38`)
    .then((res) => res.json())
    .then((res) => {
      setResults(res.Search)})
}


  function handleChange(e){
    setMovies(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    fetchData();
    navigate('/movies/results')
  }


  return (
    <>
      <Nav handleSubmit={handleSubmit} handleChange={handleChange} movies={movies}/>
      <Routes>
        <Route path ='/movies/:index' element={<MovieList movies={movies}/>}/>
        <Route path ='/movies/results' element={<Results results={results}/>}/>
      </Routes>
    
    </>
  );
}
export default App;
