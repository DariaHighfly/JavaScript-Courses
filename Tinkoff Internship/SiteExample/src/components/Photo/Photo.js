import React, { Component } from 'react';
import './Photo.css';

export default class Photo extends Component {
  render() {
    return (
      <div className="photoPic">
          <div>
            <p className="photoText">Творчество - общее дело, творимое уединенными.</p> <br/>
          </div>
          <div>
            <p className="photoTextAuthor"> М. Цветаева</p>
          </div>
      </div>
    )
  }
}