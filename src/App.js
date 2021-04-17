import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Admin from "./components/Admin/Admin/Admin";
import MainPart from "./components/Admin/MainPart/MainPart";
import AllStudent from "./components/AllStudent/AllStudent/AllStudent";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home/Home";
import Services from "./components/Home/Services/Services";
import Testimonials from "./components/Home/Testimonials/Testimonials";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ServicePage from "./components/ServicePage/ServicePage/ServicePage";

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/Services">
          <ServicePage></ServicePage>
        </PrivateRoute>
        <PrivateRoute path="/dashboard/allStudent">
          <AllStudent></AllStudent>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute path="/review">
          <Testimonials></Testimonials>
        </PrivateRoute>
        <PrivateRoute path="/admin/addTeacher">
          <MainPart></MainPart>
        </PrivateRoute>
        <PrivateRoute path="/admin/addService">
          <Services></Services>
        </PrivateRoute>
        <PrivateRoute path="/admin">
          <Admin></Admin>
        </PrivateRoute>
      </Switch>
    </div>
  </Router>
  </UserContext.Provider>
  );
}

export default App;
