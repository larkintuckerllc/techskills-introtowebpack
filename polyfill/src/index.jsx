import React from 'react';
import { render } from 'react-dom';
// import 'babel-polyfill';
import Secondary from './Secondary';

render(
  <Secondary />,
  document.getElementById('root'),
);
if (process.env.NODE_ENV !== 'production') {
  window.console.log('Looks like we are in development mode!');
}
