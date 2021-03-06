// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
//lewagon
import reducers from './reducers';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

import citiesReducer from './reducers/cities_reducer';

// State and reducers
const reducers = combineReducers({
  changeMe: (state = null, action) => state
  cities:
  cityActive: cityReducer // new redux state key

});




// new reducers
const cities = combineReducers({
cities: // i guues i have to create another folder and call it
});


//add a new redux state key
const cityActive = combineReducers({

});

// new reducer for the action
const active = combineReducers({

});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);



//lewagon code


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// why?
import reducers from './reducers';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('.container')
);
