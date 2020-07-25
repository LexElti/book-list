import React from 'react'
import {connect} from 'react-redux' 
import {fetchBooks} from '../store/actions'
import Alert from './Alert'
import Input from './Input'

export const BookForm = ({filters, alert, fetchBooks}) => {
  const submitHandler = event => {
    event.preventDefault()
    fetchBooks(filters)
  }

  const inputs = Object.keys(filters)
    .map(key => <Input name={key} key={key} />)

  return (
    <form onSubmit={submitHandler}>
      {alert && <Alert text={alert} />}
      <div className="row">
        {inputs}
      </div>
      <button 
        className="btn btn-primary"
        type="submit"
      >Search</button>
    </form>
  )
}

const mapStateToProps = state => ({
  filters: state.books.filters,
  alert: state.app.alert
})

const mapDispatchToProps = {
  fetchBooks
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm)
