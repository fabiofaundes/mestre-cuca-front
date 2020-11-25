import React from 'react'
import { render } from '@testing-library/react'
import Table from './Table'

const mockedData = [
  {
    nome: "Pipoca Yoki",
    armazem: "Gaveta da cozinha",
    dataDeValidade: "01/12/2001",
    quantidade: "400 gramas",
  },
]

describe("<Table />", () => {
  it('should render without crashing', () => {
    render(<Table data={mockedData}/>)
  })

  it('should display columns names', () => {
    const { findByText } = render(<Table data={mockedData}/>)

    findByText("Nome")
    findByText("Armazém")
    findByText("Data de Validade")
    findByText("Quantidade")
  })

  it('should display object info', () => {
    const { findByText } = render(<Table data={mockedData} />)

    findByText("Pipoca Yoki")
    findByText("Gaveta da cozinha")
    findByText("01/12/2001")
    findByText("400 gramas")
  })
})