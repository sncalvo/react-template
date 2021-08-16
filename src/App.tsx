import React from 'react';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import Welcome from '@components/templates/Welcome';
import About from '@components/templates/About';

const App: React.FC = () => (
  <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Welcome />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
