import React, { Component } from 'react';
import './SignUp.css'
import Footer from "../../components/Footer/Footer";
import SignUpComponent from "../../components/Auth/SignUp"

export default class SignUp extends Component {
  render() {
    return (
      <div className="signUpPage">
        <SignUpComponent/>
        <Footer/>
      </div>
    );
  }
}