import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const validWaves = [
  // Original
  'light',
  'red',
  'yellow',
  'orange',
  'purple',
  'green',
  'teal',
  // Custom
  'primary',
  'secondary',
]

const Link = ({ children, waves, className = '', ...params }) => {
  const linkClassName = classNames({
    'waves-effect': waves,
    [`waves-${waves}`]: typeof waves === 'string',
  }, className)

  return (
    <RouterLink className={linkClassName} {...params}>
      { children }
    </RouterLink>
  )
}

Link.propTypes = {
  waves: PropTypes.oneOfType([
    PropTypes.oneOf(validWaves),
    PropTypes.bool,
  ]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Link
