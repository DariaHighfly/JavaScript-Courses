import React, { Component } from 'react';
import './SignIn.css'
import Footer from "../../components/Footer/Footer";
import SignInComponent from "../../components/Auth/SignIn"

export default class SignIn extends Component {
  render() {
    return (
      <div className="signInPage">
        <SignInComponent/>
        <Footer/>
      </div>
    );
  }
}