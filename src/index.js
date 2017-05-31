// This is the main app called by index.html
// @author Richard Ong <richard.ong@lollipoplab.io>

// importing modules
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { composeWithDevTools } from 'redux-devtools-extension';
import Middleware from './Middleware';

// importing middleware
import thunk from 'redux-thunk';

// importing react router for app navigation
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

// importing actions and reducers
import * as reducers from './reducers';
reducers.routing = routerReducer;

// importing in components
import Component from './components/Read';


injectTapEventPlugin();

const store = createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(thunk, Middleware)));
const history = syncHistoryWithStore(hashHistory, store);
const routes = (
  <Route path='/' component={Component} />
);

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: 'orange',
  }
});

function run() {
  let state = store.getState();

  ReactDOM.render(
    (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Router history={history}>
            {routes}
          </Router>
        </MuiThemeProvider>
      </Provider>
    ),
    document.getElementById('root')
  )
}

function init() {
  run();
  store.subscribe(run);
}

init();
