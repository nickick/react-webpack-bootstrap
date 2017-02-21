import React from 'react'
import { Link } from 'react-router'

import ROUTES from 'router/routes'

class Example extends React.Component {
  render () {
    return (
      <div>
        Test app
        <Link to={ROUTES.ROOT}>Root link</Link>
      </div>
    )
  }
}

export default Example
