import React from 'react'
import { render } from 'react-dom'

import style from './style.css'
import 'normalize.css/normalize.css'
import './global.css'

class App extends React.Component {
  render () {
    return (
      <div className={style.container}>
        Test app 1
      </div>
    )
  }
}

const entryNode = document.getElementById('app')
render(<App />, entryNode)
