import React from 'react'
import { useFormContext } from 'react-hook-form'

import store from '../../store'

import { ReactSelect } from '../StyledComponents'
import { ArmazemSelectorContainer } from './styledComponents'

const ArmazemSelector = ({ required, includeBtn }) => {

    const { register } = useFormContext()

    return(
        <ArmazemSelectorContainer>
            <ReactSelect
                label='Armazém'
                options={store.getState().armazem.armazens
                    .map(armazem => ({ label: armazem.name, value: armazem.id }))
                }
                name='armazem'
                register={register({required})}            
            />
            {
                includeBtn &&
                <div className='d-flex flex-grow-1 justify-content-center'>
                    <button onClick={() => {}}>Criar armazém +</button>
                </div>                
            }
        </ArmazemSelectorContainer>
    )
}

export default ArmazemSelector