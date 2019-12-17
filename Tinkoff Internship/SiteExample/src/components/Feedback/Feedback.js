import React, { Component } from 'react';
import './Feedback.css';

export default class Feedback extends Component {
  render() {
    return (
      <div className="feedback">
        <form className="feedbackForm">
          <label className="feedbackTitle"> Свяжитесь с нами за пару кликов! </label> <br/> <br/>
          <label className="feedbackText"> Ваше имя </label> <br/>
          <input type="text" className="feedbackInput"/> <br/>
          <label className="feedbackText"> Ваша почта </label> <br/>
          <input type="text" className="feedbackInput"/> <br/>
          <label className="feedbackText"> Сообщение </label> <br/>
          <input type="text" className="feedbackInput"/> <br/>
          <button className="feedbackButton"> Отправить</button>
        </form>
      </div>
    )
  }
}