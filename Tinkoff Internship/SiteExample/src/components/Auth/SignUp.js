import React, { Component } from 'react';
import './SignIn.css'
import Header from "../Header/Header";

export default class SignUp extends Component {
  state = {
    email: '',
    password:'',
    firstName: '',
    lastName: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
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
            <div className="signInInput">
              <label htmlFor="firstName">Имя</label><br/>
              <input className="signInInputField" type="text" id="firstName" onChange={this.handleChange}/>
            </div>
            <div className="signInInput">
              <label htmlFor="lastName">Фамилия</label><br/>
              <input className="signInInputField" type="text" id="lastName" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <button className="signInButton">Login</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}