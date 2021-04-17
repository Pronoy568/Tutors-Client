import React, { useContext, useState } from 'react';
import img from '../../../images/Group.png';
import firebaseConfig from './firebase.confiq';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../../App';
import './MainLogin.css';
import { useHistory, useLocation } from 'react-router';


const MainLogin = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [user , setUser] = useState({})
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    var provider = new firebase.auth.GoogleAuthProvider();

    const SignIn = () => {
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          var user = result.user;
          setUser(user);
          setLoggedInUser(user);
          history.replace(from);
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          console.log(errorMessage,errorCode,email, credential);
        });
    }

    return (
        <div class="login">
            <img src={img} />
            <button onClick={SignIn} type="button" class="btn btn-success">Google Sign in</button>
        </div>
    );
};

export default MainLogin;