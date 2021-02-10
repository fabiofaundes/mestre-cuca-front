import React from 'react'
import { render } from '@testing-library/react'
import ArmazemSelector from './ArmazemSelector'
import { FormProvider, useForm } from 'react-hook-form'

describe('<ArmazemSelector />', () => {

    const TestComponent = () => {

        const methods = useForm()

        return(
            <FormProvider {...methods}>
                <ArmazemSelector />
            </FormProvider>
        )        
    }

    it('should render without crashing', () => {
        render(<TestComponent />)
    })
})