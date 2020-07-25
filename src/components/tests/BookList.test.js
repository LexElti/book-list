import React from 'react'
import {BookList} from '../BookList'
import Loader from '../Loader'
import Book from '../Book'

describe('<BookList />', () => {
  const props = {
    itemCount: 8,
    books: [],
    page: 1,
    loader: false
  }

  describe('<BookList /> initial', () => {
    const wrapper = shallow(<BookList {...props} />)

    it('renders properly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should have components', () => {
      expect(wrapper.find(Book)).toHaveLength(0)
    })

    it('should not render Loader', () => {
      expect(wrapper.find(Loader)).toHaveLength(0)
    })
  })

  describe('<BookList /> with loader', () => {
    const nextProps = {
      ...props,
      loader: true,
    }

    const wrapper = shallow(<BookList {...nextProps} />)

    it('renders properly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should have components', () => {
      expect(wrapper.find(Book)).toHaveLength(0)
    })

    it('should render Loader', () => {
      expect(wrapper.find(Loader)).toHaveLength(1)
    })
  })

  describe('<BookList /> with books', () => {
    const books = Array(20).fill('')
    const nextProps = {
      ...props,
      books
    }

    const wrapper = shallow(<BookList {...nextProps} />)

    it('renders properly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should have components', () => {
      expect(wrapper.find(Book)).toHaveLength(8)
    })

    it('should not render Loader', () => {
      expect(wrapper.find(Loader)).toHaveLength(0)
    })
  })
})
