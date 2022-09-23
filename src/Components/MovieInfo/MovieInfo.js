import React from 'react'

export default function MovieInfo(props) {
  return (
    <div className='movie-info'>
        <h2 className='movie-title'>{props.movieObject.title || 'Default Title'}</h2>
        <div className='rating-run'>
            <h4 className='rating'>{props.movieObject.rated || 'Default Rating'}</h4>
            <h4 className='run'>{props.movieObject.runtime || 'Default runTime'}</h4>
        </div>
        <h4 className='genre'>{props.movieObject.genre}</h4>
        <h3 style={{fontWeight: 'bold'}}>Plot</h3>
        <h4 className='plot'>{props.movieObject.plot}</h4>
        <h3 style={{fontWeight: 'bold'}}>Actors</h3>
        <h4 className='actors'>{props.movieObject.actors}</h4>
    </div>
  )
}
