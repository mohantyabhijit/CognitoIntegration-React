import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import { Account } from './components/Account';
import Session from './components/Session';
import Settings from './components/Settings';
import { RandomNumber } from './components/RandomNumber';

export default () => {
  return (
    <Account>
      <Session />
      <Signup />
      <br></br>
      <br></br>
      <br></br>
      <Login />
      <br></br>
      <Settings />
      <br></br>
      <RandomNumber />
    </Account>
  );
}
