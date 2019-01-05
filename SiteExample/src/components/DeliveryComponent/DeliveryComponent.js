import React, { Component } from 'react';
import './DeliveryComponent.css';
import deliveryPost from '../Images/donation.png';
import deliverySelf from "../Images/handshake.png"


export default class DeliveryComponent extends Component {
  render() {
    return (
      <div className="delivery">
        <div className="deliveryDescription">
          <h2 className="deliveryDescriptionTitle"> Доставка из интернет-магазина </h2>
          <p className="deliveryDescriptionText"> День доставки вы можете выбрать при оформлении заказа.
            Подробнее можно прочитать здесь. <br/>
            Характеристики указаны на странице товара. <br/>
            Возможность и стоимость доставки зависит от адреса.</p>
        </div>
        <div className="deliveryDescriptionIcons">
          <div className="deliveryDescriptionCard">
            <img src={deliveryPost} className="deliveryDescriptionCardPic"/>
            <h3 className="deliveryDescriptionCardTitle"> Доставка почтой </h3>
            <p  className="deliveryDescriptionCardText"> В любой регион России почтой. <br/> Стоимость от 100 ₽
              в зависимости <br/>
              от региона (но не более 250 ₽). <br/>
              Подробности будут отправлены вам <br/>
              на почту после оформление заказа </p>
          </div>
          <div className="deliveryDescriptionCard">
            <img src={deliverySelf} className="deliveryDescriptionCardPic"/>
            <h3  className="deliveryDescriptionCardTitle"> Самовывоз - Москва </h3>
            <p className="deliveryDescriptionCardText"> Внутри садового кольца по договоренности <br/>
              Стоимость 50 ₽. <br/>
              Или же на станции метро Пролетарская <br/>
              Стоимость Бесплатно <br/>
              Подробности будут отправлены вам <br/>
              на почту после оформление заказа </p>
          </div>
        </div>
        <a href="/shopping-cart"><button className="deliveryButton"> Перейти к Мои заказы </button></a>
      </div>
    )
  }
}

// href="https://www.flaticon.com/authors/smashicons"
//  href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons