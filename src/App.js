import React from 'react'
import BookForm from './components/BookForm'
import BookList from './components/BookList'
import Pagination from './components/Pagination'

export default () => {
  return (
    <>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col">
            <BookForm />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <BookList />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  )
}
