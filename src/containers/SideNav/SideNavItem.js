import React from 'react'
import PropTypes from 'prop-types'
import Link from '@/components/Link'

const SideNavGroup = ({ name, icon, to }) => {
  return (
    <li>
      <Link to={to}>{icon ? <i className='material-icons'>{icon}</i> : ''}{name}</Link>
    </li>
  )
}

SideNavGroup.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  to: PropTypes.string.isRequired,
}

export default SideNavGroup
