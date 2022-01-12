import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './series-poster.module.css'

const SeriesPoster = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['container1']}>
        <img alt={props.poster} src={props.movie} className={styles['Image']} />
        <span className={styles['text']}>{props.serietitle}</span>
      </div>
      <div className={styles['container2']}>
        <span className={styles['text1']}>{props.score}</span>
        <Link
          to="/selected-movie-serie"
          className={` ${styles['navlink']} ${projectStyles['button']} `}
        >
          {props.details}
        </Link>
      </div>
    </div>
  )
}

SeriesPoster.defaultProps = {
  poster: 'poster',
  movie: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
  details: 'Details',
  score: 'score',
  serietitle: 'Serietitle',
}

SeriesPoster.propTypes = {
  poster: PropTypes.string,
  movie: PropTypes.string,
  rootClassName: PropTypes.string,
  details: PropTypes.string,
  score: PropTypes.string,
  serietitle: PropTypes.string,
}

export default SeriesPoster
