import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'

import App from './components/App.js';
import Home from './components/Home.js';
import AddTransaction from './components/AddTransaction.js';
import EditTransaction from './components/EditTransaction.js';

import transactions from './reducers'

import style from './css/style.css'

import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

const store = createStore(
  combineReducers({
    transactions,
    routing: routerReducer
  }),
  loadState(),
  compose(
    applyMiddleware(
      routerMiddleware(browserHistory)
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

store.subscribe(throttle(function() {
  saveState(store.getState());
}, 1000));

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="add" component={AddTransaction}/>
        <Route path="edit/:id" component={EditTransaction}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
