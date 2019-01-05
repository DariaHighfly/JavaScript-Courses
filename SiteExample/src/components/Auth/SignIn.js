import React, { Component } from 'react';
import './SignIn.css'
import Header from "../Header/Header";

export default class SignInComponent extends Component {
  state = {
    email: '',
    password:'',
  };

  handleChange = (e) => {
    console.log(e);
  };

  handleSubmit = (e) => {
    console.log(e);
  };

  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="signInText"> Войдите </h5>
            <div className="signInInput">
              <label htmlFor="email">Email</label><br/>
              <input className="signInInputField" type="email" id="email" onChange={this.handleChange}/>
            </div>
            <div className="signInInput">
              <label htmlFor="password">Пароль</label><br/>
              <input className="signInInputField" type="password" id="password" onChange={this.handleChange}/>
            </div>
              <a href="/home"><button className="signInButton">Войти</button></a>св
          </form>
        </div>
      </div>
    )
  }
}