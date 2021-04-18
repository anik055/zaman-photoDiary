import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AllPatients from './components/AllPatients/AllPatients/AllPatients';
import AddPackage from './components/AddPackage/AddPackage';
import AddAdmin from './components/AddAdmin/AddAdmin';
import AddReview from './components/AddReview/AddReview';
import AppointmentForm from './components/Appointment/AppointmentForm/AppointmentForm';
import Checkout from './components/Checkout/Checkout';
import ProcessPayment from './components/ProcessPayment/ProcessPayment'
import ManageServices from './components/ManageServices/ManageServices';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h3>email: {loggedInUser.email}</h3>
      <Router>
        <Switch>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/allPatients">
            <AllPatients></AllPatients>
          </PrivateRoute>
          <Route path="/addPackage">
            <AddPackage></AddPackage>
          </Route>
          <Route path="/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/manage">
            <ManageServices></ManageServices>
          </Route>
          <Route path="/review">
            <AddReview></AddReview>
          </Route>
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
