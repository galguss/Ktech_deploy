import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
//import rootReducer from './redux/reducers/reducers';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import './index.css';

//let store = createStore(rootReducer, {user: {}});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <BrowserRouter>
    <Provider store = {store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.Fragment>
);


