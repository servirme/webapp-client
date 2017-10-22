import React from 'react';
import {
  Link,
} from 'react-router-dom';

import logo from '../../logo.svg';
import styles from './styles.scss';

const App = () => {
  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <h1 className={styles.title}>Servir.me</h1>
      </header>
      <p className={styles.intro}>
        Esta é a home do servir.me
      </p>
      <Link to="/admin">ADMIN</Link>
    </div>
  );
};

export default App;
