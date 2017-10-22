import React from 'react';
import PropTypes from 'prop-types';

const AdminLayout = ({ children }) => {
  return (
    <div>
      <h1>Layout Admin</h1>
      { children }
    </div>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminLayout;
