import React, { Component } from 'react';
import './SignOut.css'
import Footer from "../../components/Footer/Footer";
import SignOutComponent from "../../components/Auth/SignOut"

export default class SignOut extends Component {
  render() {
    return (
      <div className="signOutPage">
        <SignOutComponent/>
        <Footer/>
      </div>
    );
  }
}