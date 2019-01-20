import React from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './index.scss';
import Authorization from '../Authorization';
import Home from '../Home';

const App = () => (
  <div className="App">
    <header className="App__header">
      <img src={logo} className="App__logo" alt="logo" />
    </header>

    <main className="App__body">
      <Route path="/" exact component={Home} />
      <Route path="/authorization" component={Authorization} />
    </main>
  </div>
);

export default App;
