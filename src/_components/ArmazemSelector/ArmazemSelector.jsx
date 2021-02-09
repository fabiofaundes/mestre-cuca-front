import React from 'react'
import { useFormContext } from 'react-hook-form'

import store from '../../store'

import { ReactSelect } from '../StyledComponents'

const ArmazemSelector = ({required}) => {

    const { register } = useFormContext()

    return(
        <ReactSelect
            label='Armazém'
            options={store.getState().armazem.armazens
                .map(armazem => ({ label: armazem.name, value: armazem.id }))
            }
            name='armazem'
            register={register({required})}            
        />
    )
}

export default ArmazemSelector