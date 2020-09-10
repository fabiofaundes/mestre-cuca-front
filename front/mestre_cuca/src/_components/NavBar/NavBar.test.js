import React from 'react'
import { render } from '@testing-library/react'
import NavBar from './NavBar'
import { BrowserRouter } from 'react-router-dom'

describe('<NavBar />', () =>{
  it('should render without crashing', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    )
  })
})