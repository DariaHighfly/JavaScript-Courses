import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className='App-header'>
          <nav className="menuWrap">
            <div className="menuWrapMenu">
              <a href="/" className="menuItem"> Главная </a>
              <a href="/stickers" className="menuItem"> Стикеры </a>
              <a href="/" className="LogoMenuItem"> HighShop </a>
              <a href="/shopping-cart" className="menuItem"> Мои товары </a>
              <a href="/delivery" className="menuItem"> Доставка </a>
            </div>
            <div className="menuWrapSign">
              <a href="/sign-in" className="menuItemSignInOut"> Войти </a>
              <a href="/sign-out" className="menuItemSignInOut"> Выйти </a>
            </div>
          </nav>
          {this.props.children}
      </div>
    )
   }
}