import {bookReducer, initialState} from '../bookReducer'
import {FETCH_BOOKS, PAGINATION, CHANGE_FILTERS} from '../types'

describe('Book reducer', () => {
  it('should return the initial state', () => {
    expect(bookReducer(undefined, {})).toEqual(initialState)
  })

  it('FETCH_BOOKS', () => {
    const action = {
      type: FETCH_BOOKS,
      payload: [
        {}, {}, {}
      ]
    }

    expect(bookReducer(initialState, action)).toEqual({
      ...initialState,
      books: [
        {}, {}, {}
      ]
    })
  })

  it('PAGINATION', () => {
    const action = {
      type: PAGINATION,
      payload: 1
    }

    expect(bookReducer(initialState, action)).toEqual({
      ...initialState,
      page: 1
    })
  })

  it('CHANGE_FILTERS', () => {
    const action = {
      type: CHANGE_FILTERS,
      payload: {
        title: 'Title',
      }
    }

    expect(bookReducer(initialState, action)).toEqual({
      ...initialState,
      filters: {
        ...initialState.filters,
        title: 'Title'
      }
    })
  })
})
