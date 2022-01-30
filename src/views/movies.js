import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Sidebar from '../components/sidebar'
import RowForFilmPosters from '../components/row-for-film-posters'
import styles from './movies.module.css'
import FilmPoster from '../components/film-poster'

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [selectedMovie,setSelectedMovie] = useState([])
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/search/movie?api_key=07a61de5b731a869bc9cec8e25d2c8a8&query=batman')
      .then(res => res.json())
      .then(data => setMovies(data.results))
  },[])

  const clickHandler = (e,obj)=>{
    e.preventDefault()
    console.log(obj)
    setSelectedMovie(obj)
    console.log('clickHandler')
  }
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
              <FilmPoster key={index} clickHandler={clickHandler} movie={movie} rootClassName="rootClassName5"></FilmPoster>
            ))
          }

       

        </div>
      </div>
    </div>
  )
}

export default Movies
