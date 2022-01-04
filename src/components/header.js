import React from 'react'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import styles from './header.module.css'

const Header = (props) => {
  return (
    <header className={` ${styles['Header']} ${styles[props.rootClassName]} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <NavigationLinks rootClassName="rootClassName10"></NavigationLinks>
      <span className={styles['text']}>{props.text}</span>
    </header>
  )
}

Header.defaultProps = {
  text: 'MovieDatabase',
  rootClassName: '',
  image_alt: 'logo',
  image_src: '49bdda4b-8fc1-464b-baf9-1cd747a9bef3',
}

Header.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Header
