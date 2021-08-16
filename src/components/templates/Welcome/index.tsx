import React from 'react';

import logo from '@assets/icons/logo.svg';

const Welcome: React.FC = () => (
  <header>
    <img src={logo} alt="logo" />
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
    <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
      Learn React
    </a>
  </header>
);

export default Welcome;
