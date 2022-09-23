import React from 'react'

export default function MovieRating(props) {
  return (
    <div className='movie-rating'>{props.movieObject.rating}</div>
  )
}
