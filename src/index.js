import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
const store=createStore(allReducers);
ReactDOM.render(
  <Provider store={store}><App/></Provider>

  , document.getElementById('root'));
registerServiceWorker();
