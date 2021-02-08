import React from 'react'
import { Filter } from '../../_components'

const Armazens = () => {
  return(
    <>
      <h1 className='title text-center'>Gerencie seus Ingredientes</h1>
      <Filter target='armazem' />
    </>
  )
}

export default Armazens