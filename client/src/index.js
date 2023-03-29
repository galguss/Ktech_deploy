import React from 'react';
import ReactDOM from 'react-dom/client';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.Fragment>
);


