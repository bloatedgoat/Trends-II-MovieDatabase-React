import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Trends II MovieDatabase</title>
        <meta property="og:title" content="Trends II MovieDatabase" />
      </Helmet>
      <Header rootClassName="rootClassName"></Header>
      <div className={styles['container1']}>
        <span className={styles['HelloText']}>
          Discover all movies and series!
        </span>
        <video
          src
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          className={styles['VideoTrailerHomePage']}
        ></video>
        <div className={styles['container2']}>
          <div className={styles['ContainerFilm']}>
            <Link to="/movies" className={styles['navlink']}>
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className={styles['ImageFilm']}
              />
            </Link>
            <Link to="/movies" className={styles['TextMovies']}>
              <span>Discover movies</span>
              <span>&amp;#8203;</span>
            </Link>
          </div>
          <div className={styles['ContainerSeries']}>
            <Link to="/tv-shows" className={styles['navlink1']}>
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className={styles['ImageSerie']}
              />
            </Link>
            <Link to="/tv-shows" className={styles['TextSeries']}>
              <span>Discover series</span>
              <span>â</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
