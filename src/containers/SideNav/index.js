import React, { Component } from 'react'
import Link from '@/components/Link'
import SideNavGroup from './SideNavGroup'
import SideNavItem from './SideNavItem'

const sidebarLinks = [
  {
    icon: 'restaurant',
    name: 'Ver meu cadápio',
    to: '/',
  },
  {
    icon: 'menu',
    name: 'Itens',
    to: '/admin/itens',
  },
  {
    icon: 'menu',
    name: 'Itens',
    to: '/admin/itens',
  },
]

const renderLinks = (links) => {
  return links.map((link, index) => {
    // TODO - group
    if (link.children) {
      return (
        <SideNavGroup key={index} icon={link.icon} name={link.name}>
          { renderLinks(link.children) }
        </SideNavGroup>
      )
    }

    return (
      <SideNavItem key={index} icon={link.icon} name={link.name} to={link.to}/>
    )
  })
}

class SideNav extends Component {
  componentDidMount() {
    $(this._collapsible).collapsible()
  }

  render() {
    return (
      <div>
        <ul id='slide-out' className='side-nav fixed'>
          <li className='logo'>
            <Link waves id='logo-container' to='/admin' className='brand-logo'>SERVIR.ME admin</Link>
          </li>
          <li>
            <div className='divider'/>
          </li>
          <li className='no-padding'>
            <ul className='collapsible collapsible-accordion' ref={(node) => { this._collapsible = node }}>
              {renderLinks(sidebarLinks)}
            </ul>
          </li>
        </ul>
        <a href='#' data-activates='slide-out' className='button-collapse'><i className='material-icons'>menu</i></a>
      </div>
    )
  }
}

export default SideNav
