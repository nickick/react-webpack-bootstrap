import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import ROUTES from './routes'
import App from 'components/app'
import Example from 'components/example'

class AppRouter extends React.Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path={ROUTES.ROOT} component={App} />
        <Route path={ROUTES.EXAMPLE} component={Example} />
      </Router>
    )
  }
}

export default AppRouter
