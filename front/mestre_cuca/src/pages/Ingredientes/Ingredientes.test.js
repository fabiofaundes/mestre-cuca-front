import React from 'react'
import { render } from '@testing-library/react'
import Ingredientes from './Ingredientes'

describe('<Ingredientes />', () => {
  it('should render without crashing', () => {
    render(<Ingredientes />)
  })
})
