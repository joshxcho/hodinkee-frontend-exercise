import React, { Component } from 'react';

import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Headers extends Component {
  handleClickShop = () => {
    window.location.assign('http://shop.hodinkee.com');
  };

  render() {
    return (
      <div className="headers-container">
        <button className="headers-icon" onClick={this.handleClickShop} type="button">
          &#60; H SHOP
        </button>
        <button className="headers-icon" type="button">
          SHARE <FontAwesomeIcon icon={faShare} />
        </button>
      </div>
    );
  }
}
