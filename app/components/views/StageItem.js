import React from 'react'
import PropTypes from 'prop-types'

export const StageItem = ({ key, item, className, styles }) => {
  return (
    <li style={styles} className={className} key={key}>
      {item}
    </li>
  )
}

StageItem.propTypes = {
  key: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]).isRequired,
  item: PropTypes.node,
  className: PropTypes.string.isRequired,
  styles: PropTypes.object.isRequired,
}
