import React from 'react'
import {connect} from 'react-redux'
import Book from './Book'
import Loader from './Loader'

export const BookList = ({itemCount, books, page, loader}) => {
  if (loader) {
    return <Loader />
  }
  
  const fistIndex = page * itemCount - itemCount
  const lastIndex = page * itemCount - 1
  const currentBooks = books.filter((_, index) => index >= fistIndex && index <= lastIndex)

  return currentBooks.map(book => <Book book={book} key={book.id} />)
}

const mapStateToProps = state => ({
  itemCount: state.books.itemCount,
  books: state.books.books,
  page: state.books.page,
  loader: state.app.loading
})

export default connect(mapStateToProps, null)(BookList)
