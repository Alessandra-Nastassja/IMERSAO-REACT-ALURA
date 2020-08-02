import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';

import Home from './pages/home';
import CadastroVideo from './pages/cadastro/Video'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cadastro/video" component={CadastroVideo} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

