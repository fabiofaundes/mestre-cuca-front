import React from 'react'
import { Filter } from '../../_components'

const Ingredientes = () => {
  return(
    <>
      <h1 className='title text-center'>Gerencie seus Ingredientes</h1>
      <Filter target="ingrediente" />
    </>
  )
}

export default Ingredientes