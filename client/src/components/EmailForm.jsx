import React, { Component } from 'react';

export default class EmailForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({ email: value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          className="input-form"
          type="email"
          name="email"
          placeholder="Your email address"
          onChange={this.handleChange}
          required
        />

        <input className="input-btn" type="submit" value="NOTIFY ME" />
      </form>
    );
  }
}
