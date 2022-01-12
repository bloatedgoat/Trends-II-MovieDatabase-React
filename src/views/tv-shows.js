import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Sidebar from '../components/sidebar'
import FilmPoster from '../components/film-poster'
import styles from './tv-shows.module.css'

const TvShows = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>TvShows - Trends II MovieDatabase</title>
        <meta property="og:title" content="TvShows - Trends II MovieDatabase" />
      </Helmet>
      <Header rootClassName="rootClassName2"></Header>
      <div className={styles['container1']}>
        <Sidebar></Sidebar>
        <div className={styles['container2']}>
          <FilmPoster rootClassName="rootClassName4"></FilmPoster>
        </div>
      </div>
    </div>
  )
}

export default TvShows
