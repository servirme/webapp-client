import React from 'react'
import PropTypes from 'prop-types'

const AdminContent = ({ children }) => {
  return (
    <div>
      { children }
    </div>
  )
}

AdminContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AdminContent
