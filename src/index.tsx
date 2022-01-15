import * as React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const ROOT_DOM = 'root';

render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById(ROOT_DOM)
);
