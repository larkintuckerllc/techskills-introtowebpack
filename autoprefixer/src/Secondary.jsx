import React from 'react';
import logo from './logo.png';
import beach from './beach.jpg';
import './Secondary.css';

function Secondary() {
  return (
    <div>
      <div>Hello React</div>
      <div id="secondary__images">
        <img src={logo} />
        <img src={beach} />
      </div>
    </div>
  );
}
export default Secondary;
