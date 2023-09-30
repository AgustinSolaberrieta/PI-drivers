// import { createStore , compose, applyMiddleware } from "redux";
// import thunKMiddlemare from "react-redux";
// import reducer from "./reducer"

// const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const  store = createStore(
//     reducer, 
//     composeEnhacer(applyMiddleware(thunKMiddlemare))
// );

// export default store;

import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer'; // Ajusta la ruta según la ubicación real de tu archivo reducer.js

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;