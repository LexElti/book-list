import {
  SHOW_LOADER,
  HIDE_LOADER,
  HIDE_ALERT,
  PAGINATION,
  CHANGE_FILTERS
} from '../types'
import {
  showLoader,
  hideLoader,
  hideAlert,
  changePage,
  changeFilters
} from '../actions'

describe('Actions', () => {
  it('showLoader(): should create an action', () => {
    const expectedAction = {
      type: SHOW_LOADER,
    }

    expect(showLoader()).toEqual(expectedAction)
  })

  it('hideLoader(): should create an action', () => {
    const expectedAction = {
      type: HIDE_LOADER,
    }

    expect(hideLoader()).toEqual(expectedAction)
  })

  it('hideAlert(): should create an action', () => {
    const expectedAction = {
      type: HIDE_ALERT,
    }

    expect(hideAlert()).toEqual(expectedAction)
  })

  it('changePage(): should create an action', () => {
    const expectedAction = {
      type: PAGINATION,
      payload: 1
    }

    expect(changePage(1)).toEqual(expectedAction)
  })

  it('changeFilters(): should create an action', () => {
    const expectedAction = {
      type: CHANGE_FILTERS,
      payload: {
        title: 'Title'
      }
    }

    expect(changeFilters('title', 'Title')).toEqual(expectedAction)
  })
})
