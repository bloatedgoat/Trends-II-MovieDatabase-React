import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import styles from './selected-movie-serie.module.css'
import {useParams} from 'react-router-dom'

const SelectedMovieSerie = () => {
  const {id} = useParams();
  const [movie,setMovie] = useState([])

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=07a61de5b731a869bc9cec8e25d2c8a8`)
    .then(res=>res.json())
    .then(data=>{
      setMovie(data)
    })
  },[])

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
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className={styles['Poster']}
        />
        <video
          src
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          className={styles['Trailer']}
        ></video>
      </div>
      <div className={styles['container2']}>
        <span className={styles['Score']}>
          <span>SCORE</span>
          <span>&amp;#8203;</span>
        </span>
        <div className={styles['MovieInformation']}>
          <div className={styles['ContainerReleaseDate']}></div>
          <div className={styles['ContainerGenre']}></div>
          <div className={styles['ContainerDirectorActors']}></div>
          <div className={styles['ContainerSynopsis']}></div>
        </div>
      </div>
    </div>
  )
}

export default SelectedMovieSerie
