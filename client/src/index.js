import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import reducers from './reducers'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

const store = createStore(reducers, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
  document.getElementById('root')
);
