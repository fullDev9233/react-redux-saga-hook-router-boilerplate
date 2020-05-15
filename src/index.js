import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { loadToDoList } from './actions';
import toDoApp from './reducers/index';
import rootSaga from './sagas';
// import Boot from './reducers/boot';
import * as serviceWorker from './serviceWorker';


const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const store = createStore(toDoApp, bindMiddleware(middlewares));
sagaMiddleware.run(rootSaga);

store.dispatch(loadToDoList());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
