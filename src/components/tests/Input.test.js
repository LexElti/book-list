import React from 'react'
import {Input} from '../Input'

describe('<Input />', () => {
  const props = {
    name: 'title',
    filters: {
      title: '', author: '', publisher: '', subject: ''
    },
    changeFilters: () => {},
  }
  
  describe('<Input /> initial', () => {
    const wrapper = shallow(<Input {...props} />)

    it('renders properly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should render component with props', () => {
      const input = wrapper.find('input')
      expect(input.prop('name')).toEqual('title')
      expect(input.prop('value')).toEqual('')
      expect(input.prop('placeholder')).toEqual('Title')
    })
  })

  describe('<Input /> some change', () => {
    const nextProps = {
      ...props,
      filters: {
        ...props.filters,
        title: 'Some title'
      }
    }

    const wrapper = shallow(<Input {...nextProps} />)

    it('renders properly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should render component with props', () => {
      const input = wrapper.find('input')
      expect(input.prop('name')).toEqual('title')
      expect(input.prop('value')).toEqual('Some title')
      expect(input.prop('placeholder')).toEqual('Title')
    })
  })

  describe('Input handler', () => {
    const mockFetchBooks = jest.fn()
    
    const nextProps = {
      ...props,
      changeFilters: mockFetchBooks
    }

    const wrapper = shallow(<Input {...nextProps} />)

    it('renders properly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    describe('when submiting the form', () => {
      beforeEach(() => {
        wrapper.find('input').simulate('change', {
          persist: () => {},
          target: {
            value: 'Some title'
          }
        })
      })

      it('calls method changeFilters', () => {
        expect(mockFetchBooks).toHaveBeenCalledTimes(1)
      })
    })
  })
})
