import React, { Component } from 'react';
import './SignOut.css'
import Header from "../Header/Header";

export default class SignOutComponent extends Component {
  state = {


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
          <h5 className="signInText"> Вы точно хотите выйти? </h5>
          <div>
            <a href="/"><button className="signInButton">Выйти</button></a>
          </div>
        </form>
      </div>
      </div>
    )
  }
}