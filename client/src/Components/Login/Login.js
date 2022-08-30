import React, { useContext } from 'react';
import  firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from '../Shared/Navbar/Navbar';


  

const Login = () => {

    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
 

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    
const  handleGoogleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleProvider)
  .then(res => {
    const {displayName, photoURL, email} = res.user;
    const signedInUser = {
      isSignedIn: true,
      name: displayName,
      email: email,
      photo: photoURL,
      success: true
    }
    setLoggedInUser(signedInUser);
    history.replace(from);
  })
  .catch(err => {
    console.log(err);
    console.log(err.message);
  })
}
  return (
    <div>
      <Navbar></Navbar>
      <button className='btn btn-danger btn-lg btn-block w-75 ml-5'  onClick={handleGoogleSignIn}>Sign in With Google</button>
    </div>
  );
};

export default Login;