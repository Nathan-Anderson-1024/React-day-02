import MovieCard from '../MovieCard/MovieCard';
import MovieDetails from '../MovieDetails/MovieDetails';
import './App.css';
import PropTypes from 'prop-types'
import {useState, useEffect} from 'react'
function App() {
  const [movieObject, setMovieArray] = useState([]);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=tt2975590&apikey=`).then(response => response.json()).then(json => {
      setMovieArray(json);
      console.log(movieObject)
    })
  }, [])

  // const movieObject = {
  //   posterUrl: 'https://www.warnerbros.com/movies/batman-v-superman-dawn-justice',
  //   title: 'Batman v Superman: Dawn of Justice',
  //   rated: 'PG-13',
  //   runtime: '183min',
  //   genre: 'Action, Adventure, Sci-Fi',
  //   plot: 'Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of hero it really needs.',
  //   actors: "Ben Affleck, Henry Cavill, Amy Adams, Jesse Eisenberg",
  //   type:'Movie',
  //   rating: 6.4
  // }
  return (
    <>
      <MovieCard movieObject={movieObject} />
      <MovieDetails movieObject={movieObject} />
    </>
    
  )
}

export default App;

App.propTypes = {
  movieObject: PropTypes.object
}