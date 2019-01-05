import React, { Component } from 'react';
import './Delivery.css'
import Footer from "../components/Footer/Footer";
import DeliveryComponent from "../components/DeliveryComponent/DeliveryComponent"
import Header from "../components/Header/Header";

export default class SignIn extends Component {
  render() {
    return (
      <div className="signInPage">
        <Header/>
        <DeliveryComponent/>
        <Footer/>
      </div>
    );
  }
}