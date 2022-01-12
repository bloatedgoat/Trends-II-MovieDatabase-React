import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Sidebar from '../components/sidebar'
import FilmPoster from '../components/film-poster'
import styles from './movies.module.css'

const Movies = () => {
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
          <FilmPoster rootClassName="rootClassName5"></FilmPoster>
        </div>
      </div>
    </div>
  )
}

export default Movies
