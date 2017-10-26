import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const AdminContent = ({ children }) => {
  return (
    <div className={styles.adminContent}>
      { children }
    </div>
  );
};

AdminContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminContent;
