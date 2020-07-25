import { 
  FETCH_BOOKS, 
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
  PAGINATION,
  CHANGE_FILTERS
} from './types'
import {getAPIUrl, checkAPIQuery, parseAPIResponse} from '../api/googleapis'

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function showAlert(text) {
  return dispatch => {
    
    dispatch({
      type: SHOW_ALERT,
      payload: text
    })
    
    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000)
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}

export function changePage(page) {
  return {
    type: PAGINATION,
    payload: page
  }
}

export function changeFilters(field, value) {
  return {
    type: CHANGE_FILTERS,
    payload: {
      [field]: value
    }
  }
}

export function fetchBooks(filters) {
  return async dispatch => {
    const error = checkAPIQuery(filters)
    if (error) {
      dispatch(showAlert(error))
      return
    }
    const url = getAPIUrl(filters)

    dispatch(showLoader())
    dispatch(changePage(1))
    try {
      const response = await fetch(url)
      const json = await response.json()
      const data = parseAPIResponse(json)
      dispatch({type: FETCH_BOOKS, payload: data})
    } catch (e) {
      dispatch(showAlert('Something went wrong'))
    }
    dispatch(hideLoader())
  }
}
