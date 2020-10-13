import React from 'react'
import { Filter, Table } from '../../_components'
import Column from '../../_components/Table/Column'

const mockedData = [
  {
    nome: "Pipoca Yoki",
    armazem: "Gaveta da cozinha",
    dataDeValidade: "01/12/2001",
    quantidade: "400 gramas",
  },
]

const Ingredientes = () => {
  return(
    <>
      <h1 className='title text-center'>Gerencie seus Ingredientes</h1>
      <Filter target="ingrediente" />
      <div className='row no-gutters'>
      <Table data={mockedData}>
        <Column name='nome' title='Nome' />
        <Column name='armazem' title='Armazém' />
        <Column name='dataDeValidade' title="Data de Validade" />
        <Column name='quantidade' title='Quantidade' />
      </Table>
      </div>      
    </>
  )
}

export default Ingredientes