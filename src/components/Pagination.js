import React from 'react'
import {connect} from 'react-redux'
import {changePage} from '../store/actions'

export const Pagination = ({itemCount, books, page, changePage}) => {
  const pageCount = Math.ceil(books.length / itemCount)

  const clickHandler = event => {
    event.preventDefault()
    let newPage = +event.target.dataset.page
    if (newPage === 0) {
      newPage = page - 1
    } else if (newPage > pageCount) {
      newPage = page + 1
    }
    changePage(newPage) 
  }

  const pages = Array(pageCount)
    .fill('')
    .map((_, index) => {
      const classPage = page === index + 1
        ? 'page-item active'
        : 'page-item'

      return (
        <li className={classPage} key={index + 1}>
          <a 
            className="page-link" 
            href="#"
            data-page={index + 1}
            onClick={clickHandler}
          >{index + 1}</a>
        </li>
      )
    })
  
  const classPrev = page === 1
    ? 'page-item disabled'
    : 'page-item'
  const classNext = (page === pageCount || !pages.length)
    ? 'page-item disabled'
    : 'page-item'
  
  return (
    <nav>
      <ul className="pagination">
        <li className={classPrev} key={0}>
          <a 
            className="page-link"
            href="#"
            data-page={0}
            onClick={clickHandler}
          >Previous</a>
        </li>
        {pages}
        <li className={classNext} key={pageCount + 1}>
          <a 
            className="page-link" 
            href="#"
            data-page={pageCount + 1}
            onClick={clickHandler}
          >Next</a>
        </li>
      </ul>
    </nav>
  )
}

const mapStateToProps = state => ({
  itemCount: state.books.itemCount,
  books: state.books.books,
  page: state.books.page
})

const mapDispatchToProps = {
  changePage
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
