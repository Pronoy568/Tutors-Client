import React from 'react';
import Footer from '../../Home/Footer/Footer';
import LoginNavbar from '../LoginNavbar/LoginNavbar';
import MainLogin from '../MainLogin/MainLogin';

const Login = () => {
    return (
        <div>
            <LoginNavbar></LoginNavbar>
            <MainLogin></MainLogin>
            <Footer></Footer>
        </div>
    );
};

export default Login;