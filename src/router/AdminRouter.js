import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'

import AdminLayout from '@/layouts/AdminLayout'
import AdminDashboard from '@/pages/admin/Dashboard'
import AdminConfig from '@/pages/admin/Config'

import Error404 from '@/pages/errors/Error404'

const AdminRouter = () => {
  return (
    <AdminLayout>
      <Switch>
        <Route exact path='/admin' component={AdminDashboard}/>
        <Route exact path='/admin/dashboard' component={AdminDashboard}/>
        <Route exact path='/admin/config' component={AdminConfig}/>
        <Route component={Error404}/>
      </Switch>
    </AdminLayout>
  )
}

export default AdminRouter
