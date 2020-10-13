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

const mockedColumNames = [
  "Nome",
  "Armazém",
  "Data de Validade",
  "Quantidade",
]

describe("<Table />", () => {
  it('should render without crashing', () => {
    render(<Table data={mockedData} columnNames={mockedColumNames}/>)
  })

  it('should display columns names', () => {
    const { findByText } = render(<Table data={mockedData} columnNames={mockedColumNames}/>)

    expect(findByText("Nome")).toBeTruthy()
    expect(findByText("Armazém")).toBeTruthy()
    expect(findByText("Data de Validade")).toBeTruthy()
    expect(findByText("Quantidade")).toBeTruthy()
  })

  it('should display object info', () => {
    const { findByText } = render(<Table data={mockedData} columnNames={mockedColumNames}/>)

    expect(findByText("Pipoca Yoki")).toBeTruthy()
    expect(findByText("Gaveta da cozinha")).toBeTruthy()
    expect(findByText("01/12/2001")).toBeTruthy()
    expect(findByText("400 gramas")).toBeTruthy()
  })
})