import React from 'react';
import PropTypes from 'prop-types';

import SideNav from '../containers/SideNav';
import AdminContent from '../containers/AdminContent';

const AdminLayout = ({ children }) => {
  return (
    <div>
      <SideNav/>
      <AdminContent>
        { children }
      </AdminContent>
    </div>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminLayout;
