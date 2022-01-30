import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import styles from './navigation-links.module.css'

const NavigationLinks = (props) => {
  return (
    <nav className={` ${styles['Nav']} ${styles[props.rootClassName]} `}>
      <Link to="/" className={styles['navlink']}>
        {props.text}
      </Link>
      <Link to="/movies" className={styles['navlink1']}>
        {props.text2}
      </Link>
      <Link to="/tv-shows" className={styles['navlink2']}>
        {props.text1}
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text2: 'Movies',
  text1: 'TvShows',
  rootClassName: '',
  text: 'Home',
}

NavigationLinks.propTypes = {
  text2: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks
