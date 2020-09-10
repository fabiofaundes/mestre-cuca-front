import React from 'react'
import Button from './Button'
import { render } from '@testing-library/react'

describe('<Button />', () => {
  it('should render without crashing', () => {
    render(<Button />)
  })
})