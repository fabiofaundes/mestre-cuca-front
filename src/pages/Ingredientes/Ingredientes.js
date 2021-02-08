import React, { useState } from 'react'
import { Filter, Table, CrudForm } from '../../_components'

const mockedData = [
  {
    nome: "Pipoca Yoki",
    armazem: "Gaveta da cozinha",
    dataDeValidade: "01/12/2001",
    quantidade: "400 gramas",
  },
  {
    nome: "Pipoca Yoki",
    armazem: "Gaveta da cozinha",
    dataDeValidade: "01/12/2001",
    quantidade: "400 gramas",
  },
]

const Ingredientes = () => {

  const [crudAction, setCrudAction] = useState(CrudForm.actions.CREATE)

  return(
    <>
      <h1 className='title text-center'>Gerencie seus Ingredientes</h1>
      <Filter target="ingrediente" />
      <div className='row no-gutters'>
        <div className='col-8'>
          <Table data={mockedData}>
            <Table.Column name='nome' title='Nome' />
            <Table.Column name='armazem' title='Armazém' />
            <Table.Column name='dataDeValidade' title="Data de Validade" />
            <Table.Column name='quantidade' title='Quantidade' />
          </Table>
        </div>
        <CrudForm
          className='col-4' q
          target={CrudForm.targets.INGREDIENTE}
          action={crudAction}
        />
      </div>      
    </>
  )
}

export default Ingredientes