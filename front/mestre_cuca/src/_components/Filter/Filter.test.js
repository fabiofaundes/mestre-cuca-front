import React from 'react'
import { render } from '@testing-library/react'
import Filter from './Filter'

describe('<Filter />', () => {
  it('should render without crashing',  () => {
    render(<Filter />)
  })  

  it('should render all components for ingrediente', () => {
    const {getByText} = render(<Filter target='ingrediente' />)

    expect(getByText("Filtrar Ingredientes")).toBeTruthy()

    expect(getByText("Armazéns")).toBeTruthy()
  })
})