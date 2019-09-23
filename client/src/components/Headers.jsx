import React, { Component } from 'react';

export default class Headers extends Component {
  handleClickShop = () => {
    window.location.assign('http://shop.hodinkee.com');
  };
  render() {
    return (
      <div className="headers-container">
        <button className="headers-icon" onClick={this.handleClickShop} type="button">
          H SHOP
        </button>
        <button className="headers-icon" type="button">
          SHARE
        </button>
      </div>
    );
  }
}
