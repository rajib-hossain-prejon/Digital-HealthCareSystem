
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AddDoctor from './Components/Dashboard/AddDoctor/AddDoctor';
import Login from './Components/Login/Login';
import { useState } from 'react/cjs/react.development';
import { createContext } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import DoctorsInfo from './Components/DoctorsInfo/DoctorsInfo';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser ] = useState({});

  return (
    
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} className="App">

   <Router>
     <Switch>
     <Route path="/login">
         <Login></Login>
       </Route>
     <PrivateRoute path="/dashboard/addDoctor">
         <AddDoctor></AddDoctor>
       </PrivateRoute>
     <PrivateRoute path="/dashboard/appointment">
         <Dashboard></Dashboard>
       </PrivateRoute>
       <Route path="/appointment">
         <Appointment></Appointment>
       </Route>
       <Route path="/alldoctors">
         <DoctorsInfo></DoctorsInfo>
       </Route>
       <Route exact path="/">
         <Home></Home>
       </Route>
     </Switch>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
