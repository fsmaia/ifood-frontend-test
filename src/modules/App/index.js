import React from 'react';
import { Route } from 'react-router-dom';
import './index.scss';
import Authorization from '../Authorization';
import Home from '../Home';
import AppHeader from './components/Header';

const App = () => (
  <div className="App">
    <AppHeader className="App__header" />

    <main className="App__body">
      <Route path="/" exact component={Home} />
      <Route path="/authorization" component={Authorization} />
    </main>
  </div>
);

export default App;
