import React from 'react'

import PropTypes from 'prop-types'

import SeriesPoster from './series-poster'
import styles from './row-for-series-poster.module.css'

const RowForSeriesPoster = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['container1']}>
        <SeriesPoster rootClassName="rootClassName"></SeriesPoster>
        <SeriesPoster rootClassName="rootClassName1"></SeriesPoster>
        <SeriesPoster rootClassName="rootClassName2"></SeriesPoster>
      </div>
    </div>
  )
}

RowForSeriesPoster.defaultProps = {
  rootClassName: '',
}

RowForSeriesPoster.propTypes = {
  rootClassName: PropTypes.string,
}

export default RowForSeriesPoster
