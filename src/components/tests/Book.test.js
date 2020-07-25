import React from 'react'
import Book from '../Book'

describe('<Book />', () => {
  const props = {
    book: {
      title: 'Title',
      authors: [
        'Author1', 'Author2'
      ],
      description: 'Description',
      previewLink: 'previewLink',
      thumbnail: 'thumbnail'
    }
  }

  describe('<Book /> main test with thumbnail', () => {
    const wrapper = shallow(<Book {...props} />)

    it('renders properly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('correct render data', () => {
      expect(wrapper.find('h5').text()).toEqual(props.book.title)
      expect(
        wrapper.find('.card-body').find('p').first().text()
      ).toEqual(`Authors: ${props.book.authors.join(', ')}`)
      expect(
        wrapper.find('.card-body').find('p').at(1).text()
      ).toEqual(props.book.description)
      expect(
        wrapper.find('a').prop('href')
      ).toEqual(props.book.previewLink)
      expect(
        wrapper.find('img').prop('src')
      ).toEqual(props.book.thumbnail)
    })
  })

  describe('<Book /> without thumbnail', () => {
    const nextProps = {
      ...props,
      book: {
        ...props.book,
        thumbnail: ''
      }
    }

    const wrapper = shallow(<Book {...nextProps} />)

    it('renders properly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('correct render data', () => {
      expect(wrapper.find('div.card-img-top')).toBeDefined()
    })
  })
})
