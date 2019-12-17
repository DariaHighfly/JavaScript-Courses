import React, { Component } from 'react';
import './Footer.css';
import vkPic from '../Images/vkIcon.png';
import instPic from '../Images/instIcon.png';

export default class Footer extends Component {
  render() {
    return (
      <div className="social">
        <div className="socialTitle">
          <h2 className="socialTitleText"> Мы в социальных сетях </h2>
        </div>
        <div className="socialIcons">
          <table>
            <tr>
              <td>
                <a href='https://vk.com/daria_highfly'><img className="socialItem" src={vkPic}/></a>
              </td>
              <td>
                <a href='https://www.instagram.com/dariahighflyart'> <img className="socialItem" id="socialInst" src={instPic}/></a>
              </td>
            </tr>
          </table>
        </div>
        <div className="author"> DariaHighfly © 2018. All Rights Reserved.</div>
      </div>
    )
  }
}