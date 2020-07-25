import React from 'react'
import {BookForm} from '../BookForm'
import Input from '../Input'
import Alert from '../Alert'

describe('<BookForm />', () => {
  const props = {
    filters: {
      title: '', author: '', publisher: '', subject: ''
    },
    alert: null,
    fetchBooks: () => {},
  }

  describe('<BookForm /> initial', () => {
    const wrapper = shallow(<BookForm {...props} />)

    it('renders properly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should have components', () => {
      expect(wrapper.find(Input)).toHaveLength(4)
    })

    it('should not render Alert', () => {
      expect(wrapper.find(Alert)).toHaveLength(0)
    })
  })

  describe('<BookForm /> with warning message', () => {
    const nextProps = {
      ...props,
      alert: 'Something message',
    }

    const wrapper = shallow(<BookForm {...nextProps} />)

    it('renders properly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should have components', () => {
      expect(wrapper.find(Input)).toHaveLength(4)
    })

    it('should render Alert', () => {
      expect(wrapper.find(Alert)).toHaveLength(1)
    })
  })

  describe('Form handlers', () => {
    const mockFetchBooks = jest.fn()
    
    const nextProps = {
      ...props,
      fetchBooks: mockFetchBooks
    }

    const wrapper = shallow(<BookForm {...nextProps} />)

    it('renders properly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    describe('when submiting the form', () => {
      beforeEach(() => {
        wrapper.find('form').simulate('submit', {
          preventDefault: () => {}
        })
      })

      it('calls method fetchBooks', () => {
        expect(mockFetchBooks).toHaveBeenCalledTimes(1)
      })
    })

    describe('when clicking the button', () => {
      beforeEach(() => {
        wrapper.find('form').simulate('click', {
          preventDefault: () => {}
        })
      })

      it('calls method fetchBooks', () => {
        expect(mockFetchBooks).toHaveBeenCalledTimes(1)
      })
    })
  })
})
