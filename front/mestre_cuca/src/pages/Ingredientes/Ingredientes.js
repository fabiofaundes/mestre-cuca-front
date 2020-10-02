import React from 'react'
import { Filter, Table } from '../../_components'

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

const Ingredientes = () => {
  return(
    <>
      <h1 className='title text-center'>Gerencie seus Ingredientes</h1>
      <Filter target="ingrediente" />
      <div className='row no-gutters'>
      <Table data={mockedData} columnNames={mockedColumNames} className='col-lg-9'/>
      </div>      
    </>
  )
}

export default Ingredientes