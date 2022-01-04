import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import styles from './selected-movie.module.css'

const SelectedMovie = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>SelectedMovie - Trends II MovieDatabase</title>
        <meta
          property="og:title"
          content="SelectedMovie - Trends II MovieDatabase"
        />
      </Helmet>
      <Header rootClassName="rootClassName1"></Header>
      <h1 className={styles['Filmtitel']}>Filmtitel</h1>
      <div className={styles['container1']}>
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className={styles['Filmposter']}
        />
        <video
          src
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          className={styles['Filmtrailer']}
        ></video>
      </div>
      <div className={styles['container2']}>
        <span className={styles['Score']}>
          <span>SCORE</span>
          <span>&amp;#8203;</span>
        </span>
        <div className={styles['MovieInformation']}></div>
      </div>
    </div>
  )
}

export default SelectedMovie
