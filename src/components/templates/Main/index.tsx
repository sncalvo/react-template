import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import About from '@components/templates/About';
import Welcome from '@components/templates/Welcome';
import SignUp from '@components/templates/SignUp';

import MenuItem from '@components/atoms/MenuItem';

const Main = (): React.ReactElement => (
  <BrowserRouter>
    <div>
      <nav className="flex justify-start bg-yellow-600">
        <MenuItem className="m-1">
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem className="m-1">
          <Link to="/about">About</Link>
        </MenuItem>
        <MenuItem className="m-1">
          <Link to="/signup">SignIn</Link>
        </MenuItem>
        <MenuItem className="m-1">
          <Link to="/signup">SignUp</Link>
        </MenuItem>
      </nav>
    </div>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/">
        <Welcome />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Main;
