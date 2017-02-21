import React from 'react'
import { Link } from 'react-router'

import ROUTES from 'router/routes'
import style from './style.css'

class App extends React.Component {
  render () {
    return (
      <div className={style.container}>
        Test app
        <Link to={ROUTES.EXAMPLE}>Example link</Link>
      </div>
    )
  }
}

export default App
