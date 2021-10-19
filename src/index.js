import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import allReducers from './reducer/rootReducer';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import ErrorBoundary from './ErrorBoundary';

const store = createStore(allReducers, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store} >
    <ErrorBoundary>  
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
