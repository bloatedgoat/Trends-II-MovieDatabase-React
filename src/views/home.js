import React from 'react'

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
    </div>
  )
}

export default Home
