import { React, useState, useEffect } from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Sidebar from '../components/sidebar'
import FilmPoster from '../components/film-poster'
import styles from './movies.module.css'

const Movies = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/search/movie?api_key=07a61de5b731a869bc9cec8e25d2c8a8&query=batman')
      .then(res => res.json())
      .then(data => setMovies(data.results))
  })
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Movies - Trends II MovieDatabase</title>
        <meta property="og:title" content="Movies - Trends II MovieDatabase" />
      </Helmet>
      <Header></Header>
      <div className={styles['container1']}>
        <Sidebar rootClassName="rootClassName"></Sidebar>
        <div className={styles['container2']}>
          {
            movies.map((movie, index) => (
              <FilmPoster key={index} movie={movie} rootClassName="rootClassName5"></FilmPoster>
            ))
          }

       

        </div>
      </div>
    </div>
  )
}

export default Movies
