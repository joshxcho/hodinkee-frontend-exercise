import React, { Component } from 'react';
import Headers from './Headers';
import Content from './Content';

export default class App extends Component {
  render() {
    return (
      <div>
        <Headers />
        <Content />
      </div>
    );
  }
}
