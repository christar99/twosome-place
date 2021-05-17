import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Main from './routes/Main.js';



export default function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Main} />
    </HashRouter>
  );
}