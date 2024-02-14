import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Normalize } from 'styled-normalize'
import { Provider } from 'react-redux'
import {store} from './store/store.js'
import './firebase.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Normalize/>
      <Provider store={store}>
        <App />
        </Provider>
  </BrowserRouter>
)
