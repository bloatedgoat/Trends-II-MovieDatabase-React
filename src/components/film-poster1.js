import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './film-poster1.module.css'

const FilmPoster1 = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['container1']}>
        <img alt={props.poster} src={props.movie} className={styles['Image']} />
        <span className={styles['text']}>{props.filmtitle}</span>
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

FilmPoster1.defaultProps = {
  poster: 'poster',
  details: 'Details',
  filmtitle: 'Filmtitle',
  rootClassName: '',
  score: 'score',
  movie: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

FilmPoster1.propTypes = {
  poster: PropTypes.string,
  details: PropTypes.string,
  filmtitle: PropTypes.string,
  rootClassName: PropTypes.string,
  score: PropTypes.string,
  movie: PropTypes.string,
}

export default FilmPoster1
