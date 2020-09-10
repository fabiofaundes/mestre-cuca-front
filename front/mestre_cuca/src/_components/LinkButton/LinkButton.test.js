import React from 'react'
import { render } from '@testing-library/react'
import LinkButton from './LinkButton'
import { BrowserRouter } from 'react-router-dom'

describe('<LinkButton />', () => {
  it('should render without crashing', () => {
    render(
      <BrowserRouter>
        <LinkButton />
      </BrowserRouter>
    )
  })
})
