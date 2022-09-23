import React from 'react'
import MovieInfo from '../MovieInfo/MovieInfo'
import MoviePoster from '../MoviePoster/MoviePoster'
import MovieRating from '../MovieRating/MovieRating'
export default function Movie(props) {
  return (
    <>
        <MoviePoster />
        <MovieInfo movieObject={props.movieObject}/>
        <MovieRating movieObject={props.movieObject} />
    </>
  )
}
