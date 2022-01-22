import React from 'react'

import PropTypes from 'prop-types'

import FilmPoster from './film-poster'
import styles from './row-for-film-posters.module.css'

const RowForFilmPosters = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['container1']}>
        <FilmPoster rootClassName="rootClassName1"></FilmPoster>
        <FilmPoster rootClassName="rootClassName2"></FilmPoster>
        <FilmPoster rootClassName="rootClassName3"></FilmPoster>
      </div>
    </div>
  )
}

RowForFilmPosters.defaultProps = {
  rootClassName: '',
}

RowForFilmPosters.propTypes = {
  rootClassName: PropTypes.string,
}

export default RowForFilmPosters
