import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './styles.scss';

const Home = () => {
  return (
    <div className={ styles.container }>
      <Helmet>
        <html className={ styles.html }/>
        <body className={ styles.body }/>
        <link href="https://fonts.googleapis.com/css?family=Pacifico|Raleway:100, 900" rel="stylesheet"/>
      </Helmet>
      <div className={ styles.landingContainer }>
        <div className={ styles.head }>
          Servir<span className={ styles.dot }>.</span>me
        </div>
        <div className={ styles.hr }>
          <img src="https://servirme.s3.amazonaws.com/landing-page/bell-icon.png"/>
        </div>
        <br/>
        <p className={ styles.landingText }>
          O prazer em&nbsp;
          <span className={ styles.bold }>servir</span> é todo nosso <span className={ styles.bold }>;)</span>
        </p>
      </div>

      <div className={ styles.footerContact }>
        Para maiores informações, entre em contato: <a href="mailto:contato@servir.me">contato@servir.me</a>
      </div>
    </div>
  );
};

export default Home;
