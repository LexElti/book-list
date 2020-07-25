import React from 'react'
import {Pagination} from '../Pagination'

describe('<Pagination />', () => {
  const props = {
    itemCount: 8,
    books: [],
    page: 1,
    changePage: () => {},
  }

  describe('<Pagination /> initial', () => {
    const wrapper = shallow(<Pagination {...props} />)

    it('renders properly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should have components', () => {
      expect(wrapper.find('li')).toHaveLength(2)
    })

    it('should render component with props', () => {
      const liPrev = wrapper.find('li').first()
      expect(liPrev.prop('className')).toEqual('page-item disabled')
      
      const liNext = wrapper.find('li').at(1)
      expect(liNext.prop('className')).toEqual('page-item disabled')
      const aNext = wrapper.find('a').at(1)
      expect(aNext.prop('data-page')).toEqual(1)
    })
  })

  describe('<Pagination /> with three pages', () => {
    const books = Array(20).fill('')
    const nextProps = {
      ...props,
      books
    }

    const wrapper = shallow(<Pagination {...nextProps} />)

    it('renders properly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should have components', () => {
      expect(wrapper.find('li')).toHaveLength(5)
    })

    it('should render component with props', () => {
      const aOne = wrapper.find('a').at(1)
      expect(aOne.prop('data-page')).toEqual(1)

      const aTwo = wrapper.find('a').at(2)
      expect(aTwo.prop('data-page')).toEqual(2)

      const aThree = wrapper.find('a').at(3)
      expect(aThree.prop('data-page')).toEqual(3)

      const aNext = wrapper.find('a').at(4)
      expect(aNext.prop('data-page')).toEqual(4)
    })

    describe('when current page is 1', () => {
      it('should render component with props', () => {
        const liPrev = wrapper.find('li').first()
        expect(liPrev.prop('className')).toEqual('page-item disabled')
        
        const liOne = wrapper.find('li').at(1)
        expect(liOne.prop('className')).toEqual('page-item active')
        
        const liTwo = wrapper.find('li').at(2)
        expect(liTwo.prop('className')).toEqual('page-item')
        
        const liThree = wrapper.find('li').at(3)
        expect(liThree.prop('className')).toEqual('page-item')
        
        const liNext = wrapper.find('li').at(4)
        expect(liNext.prop('className')).toEqual('page-item')
      })
    })

    describe('when current page is 2', () => {
      const nextProps2 = {
        ...nextProps,
        page: 2
      }
  
      const wrapper = shallow(<Pagination {...nextProps2} />)
  
      it('renders properly', () => {
        expect(wrapper).toMatchSnapshot()
      })

      it('should render component with props', () => {
        const liPrev = wrapper.find('li').first()
        expect(liPrev.prop('className')).toEqual('page-item')
        
        const liOne = wrapper.find('li').at(1)
        expect(liOne.prop('className')).toEqual('page-item')

        const liTwo = wrapper.find('li').at(2)
        expect(liTwo.prop('className')).toEqual('page-item active')

        const liThree = wrapper.find('li').at(3)
        expect(liThree.prop('className')).toEqual('page-item')

        const liNext = wrapper.find('li').at(4)
        expect(liNext.prop('className')).toEqual('page-item')
      })
    })

    describe('when current page is 3', () => {
      const nextProps3 = {
        ...nextProps,
        page: 3
      }
  
      const wrapper = shallow(<Pagination {...nextProps3} />)
  
      it('renders properly', () => {
        expect(wrapper).toMatchSnapshot()
      })

      it('should render component with props', () => {
        const liPrev = wrapper.find('li').first()
        expect(liPrev.prop('className')).toEqual('page-item')
        
        const liOne = wrapper.find('li').at(1)
        expect(liOne.prop('className')).toEqual('page-item')

        const liTwo = wrapper.find('li').at(2)
        expect(liTwo.prop('className')).toEqual('page-item')

        const liThree = wrapper.find('li').at(3)
        expect(liThree.prop('className')).toEqual('page-item active')

        const liNext = wrapper.find('li').at(4)
        expect(liNext.prop('className')).toEqual('page-item disabled')
      })
    })

    describe('Click handlers', () => {
      const mockFetchBooks = jest.fn()
      
      const nextPropsClick = {
        ...nextProps,
        changePage: mockFetchBooks
      }
  
      const wrapper = shallow(<Pagination {...nextPropsClick} />)
  
      it('renders properly', () => {
        expect(wrapper).toMatchSnapshot()
      })
  
      describe('when click current active page', () => {
        beforeEach(() => {
          wrapper.find('a').at(2).simulate('click', {
            preventDefault: () => {},
            target: {
              dataset : {
                page : 1
              }
            }
          })
        })
  
        it('calls method changePage', () => {
          expect(mockFetchBooks).toHaveBeenCalledTimes(1)
        })
      })
    })
  })
})
