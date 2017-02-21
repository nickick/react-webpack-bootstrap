import t from 'actions/app/action-types'

const defaultState = {
  test: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case t.FLIP_TEST:
      return Object.assign({}, state, {
        test: action.test
      })

    default: {
      return state
    }
  }
}
