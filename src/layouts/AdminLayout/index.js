import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

import SearchBar from './SearchBar'
import TopBar from './TopBar'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
// import PageLoader from './PageLoader' // TODO

import './admin'
import './style.scss'

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <body className='theme-blue'/>
      </Helmet>
      {/* <PageLoader/> TODO */}
      <div className='overlay'/>
      <SearchBar/>
      <TopBar/>
      <section>
        <LeftSideBar/>
        <RightSideBar/>
      </section>

      <section className='content'>
        <div className='container-fluid'>
          <div className='block-header'>
            <h2>DASHBOARD</h2>
          </div>
          { children }
        </div>
      </section>
    </div>
  )
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AdminLayout
