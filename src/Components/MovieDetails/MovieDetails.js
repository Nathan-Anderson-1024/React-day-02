import './MovieDetails.css'
import React from 'react'
import logo from '../MovieCard/batman_v_superman.jpg'
export default function MovieDetails(props) {
  return (
    <>
        <div className='movie-container-expanded'>
            <div>
                <img className='movie-poster' src={logo}></img>
            </div>
            <div className='movie-info'>
                <h2 className='movie-title'>{props.movieObject.title}</h2>
                <div className='rating-run'>
                    <h4 className='rating'>{props.movieObject.rated}</h4>
                    <h4 className='run'>{props.movieObject.runtime}</h4>
                </div>
                <h4 className='genre'>{props.movieObject.genre}</h4>
                <h3 style={{fontWeight: 'bold'}}>Plot</h3>
                <h4 className='plot'>{props.movieObject.plot}</h4>
                <h3 style={{fontWeight: 'bold'}}>Actors</h3>
                <h4 className='actors'>{props.movieObject.actors}</h4>
            </div>
            <div className='movie-rating'>{props.movieObject.rating}</div>
        </div>
    </>
  )
}
