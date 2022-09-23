import './MovieDetails.css'
import React from 'react'
import Movie from '../Movie/Movie.js'
export default function MovieDetails(props) {
  return (
    <>
        <div className='movie-container-expanded'>
            <Movie movieObject={props.movieObject} />
        </div>
    </>
  )
}
