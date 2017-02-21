import React from 'react'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import 'normalize.css/normalize.css'
import './global.css'

import Router from 'router'
import reducers from 'reducers'

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)))

const entryNode = document.getElementById('app')
render(
  <Provider store={store}>
    <Router />
  </Provider>
, entryNode)
