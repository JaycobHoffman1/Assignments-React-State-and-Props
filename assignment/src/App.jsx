import React, { useState } from 'react'
// Task 1: Initializing and Displaying a List
function App() {
  const buttonStyle = {
    margin: "0 20px"
  }
  const moviesList = [{title: 'Zootopia - click for details!',
  details: 'A sly fox and a bunny cop team up to solve a case.',
  genre: 'Animals'},
  {title: 'The Fox and the Hound - click for details!',
  details: 'A fox and a hound become unlikely friends.',
  genre: 'Animals'},
  {title: 'Robin Hood - click for details!',
  details: 'Robin Hood robs from the rich and gives to the poor.',
  genre: 'Animals'},
  {title: 'The Incredibles - click for details!',
  details: 'A family of superheroes team up to stop Snydrome.',
  genre: 'Action'}]
  const [movies, setmovies] = useState(moviesList)
  const [toggleMovie, setToggleMovie] = useState({})
  const handleToggleClick = (title) => {
    setToggleMovie(prevState => ({
      ...prevState,
      [title]: !prevState[title]
    }))
  }
  // I had to get help for this one function from Google ;)
  const handleRemoveMovie = (index) => {
    const newMovies = movies.filter((_, movie) => movie !== index);
    setmovies(newMovies);
  }
  const handleFilterMovie = () => {
    const newMovies = movies.filter(movie => movie.genre == 'Animals');
    setmovies(newMovies);
  }
  return (
    <div>
      <ul>
        {movies.map((movie, index) => 
        <li key={index}>
          <span onClick={() => handleToggleClick(movie.title)}>{movie.title}</span>
          <button style={buttonStyle} onClick={() => handleRemoveMovie(index)}>Remove</button>
          {toggleMovie[movie.title] && <p>{movie.details}</p>}</li>)}
      </ul>
      <button style={buttonStyle} onClick={() => handleFilterMovie()}>Show movies about animals</button>
    </div>
  )
}
export default App;