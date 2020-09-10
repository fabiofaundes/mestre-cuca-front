import React from 'react'
import { render } from '@testing-library/react'
import Armazens from './Armazens'
import { BrowserRouter } from 'react-router-dom'

describe('<Armazens />', () => {
  it('should render without crashing', () => {
    render(
      <BrowserRouter>
        <Armazens />
      </BrowserRouter>
    )
  })
})