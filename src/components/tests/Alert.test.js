import React from 'react'
import Alert from '../Alert'

describe('<Alert />', () => {
  const props = {
    text: 'Some message'
  }

  const wrapper = shallow(<Alert {...props} />)

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('correct render data', () => {
    expect(wrapper.find('.alert.alert-warning').text()).toEqual(props.text)
  })
})
