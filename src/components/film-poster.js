import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './film-poster.module.css'

const FilmPoster = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['container1']}>
        <img alt={props.movie.original_title} src={`https://image.tmdb.org/t/p/w220_and_h330_face/${props.movie.poster_path}`} className={styles['Image']} />
        <span className={styles['text']}>{props.movie.original_title}</span>
        <div className={styles['container2']}>
          <span className={styles['text1']}>{props.movie.vote_average}</span>
          <Link
            to="/selected-movie-serie"
            className={` ${styles['navlink']} ${projectStyles['button']} `}
          >
            {props.details}
          </Link>
        </div>
      </div>
    </div>
  )
}

FilmPoster.defaultProps = {
  poster: 'poster',
  details: 'Details',
  score: 'score',
  filmtitle: 'Filmtitle',
  movie: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
}

FilmPoster.propTypes = {
  poster: PropTypes.string,
  details: PropTypes.string,
  score: PropTypes.string,
  filmtitle: PropTypes.string,
  movie: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FilmPoster
