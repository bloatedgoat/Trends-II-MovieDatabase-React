import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './sidebar.module.css'

const Sidebar = (props) => {
  return (
    <div className={` ${styles['Sidebar']} ${styles[props.rootClassName]} `}>
      <div className={styles['container']}>
        <div className={styles['container01']}>
          <div className={styles['container02']}>
            <span className={styles['text']}>{props.text}</span>
          </div>
          <div className={styles['container03']}>
            <span className={styles['text1']}>{props.text1}</span>
          </div>
          <div className={styles['container04']}>
            <span className={styles['text2']}>{props.text2}</span>
          </div>
          <div className={styles['container05']}>
            <span className={styles['text3']}>{props.text3}</span>
          </div>
        </div>
      </div>
      <div className={styles['container06']}>
        <div className={styles['container07']}>
          <div className={styles['container08']}>
            <span className={styles['text4']}>{props.text4}</span>
          </div>
          <div className={styles['container09']}>
            <input
              type="text"
              placeholder={props.textinput_placeholder}
              className={` ${styles['textinput']} ${projectStyles['input']} `}
            />
          </div>
        </div>
        <button className={` ${styles['button']} ${projectStyles['button']} `}>
          {props.button}
        </button>
      </div>
    </div>
  )
}

Sidebar.defaultProps = {
  button: 'Search',
  textinput_placeholder: 'search...',
  text4: 'Search',
  text3: 'Rating',
  text1: 'Name',
  text: 'Sort by',
  rootClassName: '',
  text2: 'Popularity',
}

Sidebar.propTypes = {
  button: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text4: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
}

export default Sidebar
