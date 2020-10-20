import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie ({id, year, title, summary, poster, genres}) {
  return (
    <Link to={{
      pathname: `movie/${id}`,
      state: {
        year, title, summary, poster, genres
      }
    }}>
      <div className={`movie`}>
        <img src={poster} alt={title} title={title} />
        <div className={`movie_data`}>
          <h3 className={`movie_title`}>{title}</h3>
          <h5 className="movie_year">{year}</h5>
          <ul className={`movie_genres`}>
            {genres.map((genres, index) => 
            <li key={index}>{genres}</li>
            )}
          </ul>
          <p className={`movie_summary`}>{summary.slice(0,140)}...</p>
        </div>
      </div>
    </Link>
  )
}

// eslint-disable-next-line react/no-typos
Movie.Proptypes = {
  id: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  year: Proptypes.number.isRequired,
  summary: Proptypes.string.isRequired,
  poster: Proptypes.string.isRequired,
  genres: Proptypes.arrayOf(Proptypes.genres).isRequired
}

export default Movie;