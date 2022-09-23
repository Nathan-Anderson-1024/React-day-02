import React from 'react';
import './MovieCard.css';
import logo from './batman_v_superman.jpg';

export default function MovieCard(props) {
  return (
    <div className='movie-container'>
        <img src={logo} className='logo'></img>
        <div className='title'>
            <h3>{props.movieObject.title}</h3>
            <a href={props.movieObject.posterUrl} target='_blank' className='button'>
              <button>{props.movieObject.type}</button>
            </a>
            
        </div>
    </div>
  )
}
