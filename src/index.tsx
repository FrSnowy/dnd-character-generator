import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from 'config/store';
import Routing from 'features/Routing';
import "normalize.css";

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Routing />
    </Provider>,
    document.getElementById('root')
  )
});