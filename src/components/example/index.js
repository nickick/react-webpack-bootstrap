import React from 'react'
import { Link } from 'react-router'

import ROUTES from 'router/routes'

class Example extends React.Component {
  constructor (props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    this.props.flipTest()
  }

  render () {
    return (
      <div>
        Test app
        <Link to={ROUTES.ROOT}>Root link</Link>
        <label htmlFor='test'>Test?</label>
        <input type='checkbox' id='test' onClick={this.onClick} value={this.props.test} />
      </div>
    )
  }
}

export default Example
