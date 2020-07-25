import {combineReducers} from 'redux'
import {bookReducer} from './bookReducer'
import {appReducer} from './appReducer'

export const rootReducer = combineReducers({
  books: bookReducer,
  app: appReducer
})
