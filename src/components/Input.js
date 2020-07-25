import React from 'react'
import {connect} from 'react-redux'
import {changeFilters} from '../store/actions'

export const Input = ({name, filters, changeFilters}) => {
  const changeHandler = event => {
    event.persist()
    const field = event.target.name 
    const value = event.target.value
    changeFilters(field, value)
  }

  return (
    <div className="col-lg-3  col-sm-6 mb-4">
      <input 
        type="text" 
        className="form-control" 
        name={name}
        value={filters[name]}
        placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
        onChange={changeHandler}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  filters: state.books.filters
})

const mapDispatchToProps = {
  changeFilters
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
