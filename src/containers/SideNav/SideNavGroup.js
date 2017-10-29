import React from 'react'
import PropTypes from 'prop-types'

const SideNavGroup = ({ children, name, icon }) => {
  return (
    <li>
      <a className='collapsible-header waves-effect waves-light'><i className='material-icons'>{icon}</i>{name}</a>
      <ul className='collapsible-body'>
        {children}
      </ul>
    </li>
  )
}

SideNavGroup.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default SideNavGroup
