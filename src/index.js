import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer";
import App from './containers/App';
require('dotenv').config();

ReactDOM.render(
 <Provider store={createStore(rootReducer, {}, applyMiddleware(thunk, logger))}>
  <App />
 </Provider>,
 document.getElementById('root')
);
