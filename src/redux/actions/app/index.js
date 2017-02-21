import t from './action-types'

export const flipTest = () => {
  return (dispatch, getState) => {
    dispatch({
      type: t.FLIP_TEST,
      test: !getState().app.test
    })
  }
}
