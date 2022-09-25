import React from 'react';
import './MovieCard.css';
import logo from './batman_v_superman.jpg';

export default function MovieCard(props) {
  return (
    <div className='movie-container'>
        <img src={logo} className='logo'></img>
        <div className='title'>
            <h3>{props.movieObject.Title}</h3>
            <a href={props.movieObject.Poster} target='_blank' className='button'>
              <button>{props.movieObject.Type}</button>
            </a>
            
        </div>
    </div>
  )
}
