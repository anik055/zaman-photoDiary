import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';

import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AddPackage from './components/AddPackage/AddPackage';
import AddAdmin from './components/AddAdmin/AddAdmin';
import AddReview from './components/AddReview/AddReview';
import Checkout from './components/Checkout/Checkout';

import ManageServices from './components/ManageServices/ManageServices';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/addPackage">
            <AddPackage></AddPackage>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/manage">
            <ManageServices></ManageServices>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <AddReview></AddReview>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/checkout">
            <Checkout></Checkout>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
