import React from 'react'

import PropTypes from 'prop-types'

import FilmPoster from './film-poster'
import styles from './row-for-film-posters.module.css'

const RowForFilmPosters = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={'movies-container'}>

      <FilmPoster movie={movie} rootClassName="rootClassName3" />


        {/* {
          props.movies.map((movie, index) => (
            <FilmPoster movie={movie} rootClassName="rootClassName3" />
          ))
        } */}
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
