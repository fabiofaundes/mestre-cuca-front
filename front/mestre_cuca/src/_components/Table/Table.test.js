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
    const { getByText } = render(<Table data={mockedData} columnNames={mockedColumNames}/>)

    expect(getByText("Nome")).toBeTruthy()
    expect(getByText("Armazém")).toBeTruthy()
    expect(getByText("Data de Validade")).toBeTruthy()
    expect(getByText("Quantidade")).toBeTruthy()
  })

  it('should display object info', () => {
    const { getByText } = render(<Table data={mockedData} columnNames={mockedColumNames}/>)

    expect(getByText("Pipoca Yoki")).toBeTruthy()
    expect(getByText("Gaveta da cozinha")).toBeTruthy()
    expect(getByText("01/12/2001")).toBeTruthy()
    expect(getByText("400 gramas")).toBeTruthy()
  })
})