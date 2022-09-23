import React from 'react'
import logo from '../MovieCard/batman_v_superman.jpg'

export default function MoviePoster() {
  return (
    <div>
        <img className='movie-poster' src={logo} alt='superman v batman'></img>
    </div>
  )
}
