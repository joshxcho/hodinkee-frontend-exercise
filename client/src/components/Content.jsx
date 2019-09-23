import React from 'react';
import EmailForm from './EmailForm';
import Logo from '../assets/logo/logo.png';

const Content = () => (
  <div className="main-container">
    <div className="content-wrapper">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="content-date">Coming 06.26.19</div>
      <EmailForm />
    </div>
  </div>
);
export default Content;
