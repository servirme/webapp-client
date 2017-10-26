import React from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  Icon,
} from 'react-materialize';
import styles from './styles.scss';

const links = [
  {
    icon: 'reorder',
    name: 'Itens',
  },
];

const SideNav = () => {
  return (
    <ul className={ styles.list }>
      <li className={ styles.logo }>
        <Link to="/admin">Servir.me</Link>
      </li>
      {
        links.map((link, index) => {
          return (<li className={ styles.item } key={index}><Icon>{ link.icon }</Icon>{ link.name }</li>);
        })
      }
    </ul>
  );
};

export default SideNav;
