import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import styles from './selected-movie-serie.module.css'
import { useParams } from 'react-router-dom'
import { Badge } from 'react-bootstrap'

const SelectedMovieSerie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([])
  const [trailer, setTrailer] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=07a61de5b731a869bc9cec8e25d2c8a8`)
      .then(res => res.json())
      .then(data => {
        setMovie(data)
      })
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=07a61de5b731a869bc9cec8e25d2c8a8`)
      .then(res => res.json())
      .then(data => setTrailer(data.results[0]))
  }, [])

  return (
    <div className={styles['container']}>
      <Helmet>
        <title>SelectedMovie/Serie - Trends II MovieDatabase</title>
        <meta
          property="og:title"
          content="SelectedMovie/Serie - Trends II MovieDatabase"
        />
      </Helmet>
      <Header rootClassName="rootClassName1"></Header>
      <h1 className={styles['Titel']}>{movie.original_title}</h1>
      <div className={styles['container1']}>
        <img
          alt="image"
          src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
          className={styles['Poster']}
        />
        {
          trailer.length === 0 ?
            ''
            :
            <iframe width="560" height="315" className={styles['Trailer']} src={`https://www.youtube.com/embed/${trailer.key}`} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        }
      </div>
      {/* <div className={styles['container2']}>
        <span className={styles['Score']}>
          <span>SCORE {movie.vote_average}</span>

        </span>
        {console.log(trailer)}
        <div className={styles['MovieInformation']}>
        
        </div>
        <ul class="list-group">
          <li class="list-group-item active">Active item</li>
          <li class="list-group-item">Item</li>
          <li class="list-group-item disabled">Disabled item</li>
        </ul>
      </div> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <span className='display-4 text-light'>SCORE {movie.vote_average}</span>
          </div>
          <div className="col-md-10">
            <Badge bg="primary" className="m-1">Release Date: {movie.release_date}</Badge>
            <Badge bg="primary" className="m-1">popularity: {movie.popularity}</Badge>
            <Badge bg="primary" className="m-1">Lang: {movie.original_language}</Badge>

            <p className="display-4 text-light">Overview:</p>
            <p className="lead text-light">
              {movie.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectedMovieSerie
