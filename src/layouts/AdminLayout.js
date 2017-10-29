import React from 'react'
import PropTypes from 'prop-types'

import SideNav from '@/containers/SideNav'
import AdminContent from '@/containers/AdminContent'
import styles from './styles.scss'

const AdminLayout = ({ children }) => {
  return (
    <div>
      <SideNav/>
      <div className={styles.container}>
        <AdminContent>
          { children }
        </AdminContent>
      </div>
    </div>
  )
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AdminLayout
