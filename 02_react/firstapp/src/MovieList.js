import React from 'react'
import './Movies.css'

const MovieList = () => {
  return (
    <div className='movie'>
        <h1>Top 5 Movies</h1>
        <h2>Ordered List</h2>
        <ol>
            <li>Movie - 1</li>
            <li>Movie - 2</li>
            <li>Movie - 3</li>
            <li>Movie - 4</li>
            <li>Movie - 5</li>
        </ol>

        <h2>Unordered List</h2>
        <ul>
            <li>Movie - 1</li>
            <li>Movie - 2</li>
            <li>Movie - 3</li>
            <li>Movie - 4</li>
            <li>Movie - 5</li>
        </ul>
    </div>
  )
}

export default MovieList