import React from 'react'

export default function MovieInfo(props) {
  return (
    <div className='movie-info'>
        <h2 className='movie-title'>{props.movieObject.Title || 'Default Title'}</h2>
        <div className='rating-run'>
            <h4 className='rating'>{props.movieObject.Rated || 'Default Rating'}</h4>
            <h4 className='run'>{props.movieObject.Runtime || 'Default runTime'}</h4>
        </div>
        <h4 className='genre'>{props.movieObject.Genre}</h4>
        <h3 style={{fontWeight: 'bold'}}>Plot</h3>
        <h4 className='plot'>{props.movieObject.Plot}</h4>
        <h3 style={{fontWeight: 'bold'}}>Actors</h3>
        <h4 className='actors'>{props.movieObject.Actors}</h4>
    </div>
  )
}
