import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import throttle from 'lodash/throttle';

//Pass Default State as 2nd Arg in store Object.....
let store = createStore(
  rootReducer, 
  JSON.parse(localStorage.getItem('state')) || undefined, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//It invokes this function whenever an update happens to the state...
store.subscribe(
  throttle(
    () => localStorage.setItem('state', JSON.stringify({ users: store.getState().users })),
    2000
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();