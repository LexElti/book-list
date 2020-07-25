import {FETCH_BOOKS, PAGINATION, CHANGE_FILTERS} from './types'

export const initialState = {
  books: [],
  filters: {
    title: '',
    author: '',
    publisher: '',
    subject: ''
  },
  page: 1,
  itemCount: 8
}

const getField = payload => {
  return Object.keys(payload).join('')
}

const getValue = payload => {
  const key = getField(payload)
  return payload[key]
}

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state, 
        books: action.payload
      }
    case PAGINATION:
      return {
        ...state, 
        page: action.payload
      }
    case CHANGE_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          [getField(action.payload)]: getValue(action.payload)
        }
      }
    default:
      return state
  }
}
