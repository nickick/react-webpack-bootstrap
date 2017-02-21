import { connect } from 'react-redux'

import { flipTest } from 'actions/app'
import App from 'components/app'

const mapStateToProps = (state, props) => {
  return {
    test: state.app.test
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    flipTest: () => dispatch(flipTest())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
