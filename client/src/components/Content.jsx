import React from 'react';
import EmailForm from './EmailForm';
import Logo from '../assets/logo/logo.png';

const Content = () => (
  <section>
    <div className="content-container">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="content-date">Coming 06.26.19</div>
      <EmailForm />
    </div>
  </section>
);
export default Content;
