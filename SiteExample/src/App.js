import React, { Component } from 'react';
import './App.css';
import Main from "./pages/Main";
import Delivery from "./pages/Delivery";
import ShoppingCart from "./pages/ShoppingCart";
import Stickers from "./pages/Stickers";
import Header from "./components/Header/Header";
import SignIn from "./pages/Auth/SignIn";
import SignOut from "./pages/Auth/SignOut";
import SignUp from "./pages/Auth/SignUp";
import {IndexRoute, Route} from "react-router";
import NotFound from "./pages/NotFound";

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Main} />
      <Route path='/home' component={Main} />
      <Route path='/delivery' component={Delivery} />
      <Route path='/shopping-cart' component={ShoppingCart} />
      <Route path='/stickers' component={Stickers} />
      <Route path='/sign-in' component={SignIn} />
      <Route path='/sign-out' component={SignOut} />
      <Route path='/sign-up' component={SignUp} />
      <Route path='*' component={NotFound} />
    </Route>
  </div>
);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    }
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }

  render() {
    let Child;

    switch (this.state.route) {
      case '/home': Child = Main; break;
      case '/delivery': Child = Delivery; break;
      case '/shopping-cart': Child = ShoppingCart; break;
      case '/stickers': Child = Stickers; break;
      case '/sign-in': Child = SignIn; break;
      case '/sign-out': Child = SignOut; break;
      case '/sign-up': Child = SignUp; break;
      default: Child = Main;
    }

    return (
      <div className='Body'>
        <div className='App-header'>
          <Header/>
        </div>
      <div>
        {this.props.children}
      </div>
      </div>
    )
  }
}

//<li><NavLink to='/home' class="menuItem">Главная</NavLink></li>
// <a href="/" className="LogoMenuItem"> <img className="mainLogo" alt="mainLogo" src="mainLogo.png"/> </a>
