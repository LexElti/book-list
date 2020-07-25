import {appReducer, initialState} from '../appReducer'
import {
  SHOW_LOADER, 
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT
} from '../types'

describe('Book reducer', () => {
  it('should return the initial state', () => {
    expect(appReducer(undefined, {})).toEqual(initialState)
  })

  it('SHOW_LOADER', () => {
    const action = {
      type: SHOW_LOADER
    }

    expect(appReducer(initialState, action)).toEqual({
      ...initialState,
      loading: true
    })
  })

  it('HIDE_LOADER', () => {
    const action = {
      type: HIDE_LOADER
    }

    expect(appReducer(initialState, action)).toEqual({
      ...initialState,
      loading: false
    })
  })

  it('SHOW_ALERT', () => {
    const action = {
      type: SHOW_ALERT,
      payload: 'Some message'
    }

    expect(appReducer(initialState, action)).toEqual({
      ...initialState,
      alert: 'Some message'
    })
  })

  it('HIDE_ALERT', () => {
    const action = {
      type: HIDE_ALERT
    }

    expect(appReducer(initialState, action)).toEqual({
      ...initialState,
      alert: null
    })
  })
})
