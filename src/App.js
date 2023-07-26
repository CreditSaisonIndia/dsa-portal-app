import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Account } from './contexts/Account'
import { CustomAxios } from './contexts/CustomAxios';
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import {Amplify} from 'aws-amplify';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import ForbiddenPage from './ForbiddenPage';
import Dashboard from './Dashboard';


Amplify.configure({
    aws_cognito_region: 'us-east-1',
    aws_user_pools_id: 'us-east-1_qY0eJKuWO',
    aws_user_pools_web_client_id: 'ulab4268c8852f8bgsfbf5jgl',
  });


const App = () => {

  return(
  <BrowserRouter>
  <Account>
    <React.Fragment>
    <ReactNotifications />
      <Routes>
      <Route path='dsaPortal' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route
          path="dsaPortal/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }
        />
        <Route path="dsaPortal/forbidden" element={<ForbiddenPage/>}
        />
      </Routes>
    </React.Fragment>
    </Account>
  </BrowserRouter>
  )
}

export default App;