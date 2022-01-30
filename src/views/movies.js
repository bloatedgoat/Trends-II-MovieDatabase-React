import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Sidebar from '../components/sidebar'
import RowForFilmPosters from '../components/row-for-film-posters'
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
          <RowForFilmPosters rootClassName="rootClassName1"></RowForFilmPosters>
        </div>
      </div>
    </div>
  )
}

export default Movies
