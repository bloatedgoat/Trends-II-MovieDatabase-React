import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import projectStyles from '../style.module.css'
import styles from './aboutus.module.css'

const Aboutus = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>About us - Trends II MovieDatabase</title>
        <meta
          name="description"
          content="On this page you will find general information about our group and this assignment."
        />
        <meta
          property="og:title"
          content="About us - Trends II MovieDatabase"
        />
        <meta
          property="og:description"
          content="On this page you will find general information about our group and this assignment."
        />
      </Helmet>
      <Header rootClassName="rootClassName3"></Header>
      <h1 className={styles['Heading']}>About us</h1>
      <textarea
        placeholder="We are a group of students from Erasmushogeschool Brussel. We made this site as an assignment for Trends 2. Below you can find the location of EHB."
        className={` ${styles['Textarea']} ${projectStyles['textarea']} `}
      ></textarea>
      <iframe
        src="https://maps.google.com/maps?q=EHB&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
        className={styles['iframe']}
      ></iframe>
    </div>
  )
}

export default Aboutus
