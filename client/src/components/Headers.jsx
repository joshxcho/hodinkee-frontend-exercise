import React, { Component } from 'react';

export default class Headers extends Component {
  render() {
    return (
      <div className="headers-container">
        <button className="headers-icon" type="button">
          SHARE
        </button>
        <button className="headers-icon" type="button">
          H SHOP
        </button>
      </div>
    );
  }
}
