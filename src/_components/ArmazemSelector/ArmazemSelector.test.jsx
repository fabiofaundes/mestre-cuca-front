import React from 'react'
import { render } from '@testing-library/react'
import ArmazemSelector from './ArmazemSelector'
import { FormProvider, useForm } from 'react-hook-form'

describe('<ArmazemSelector />', () => {

    const TestComponent = ({includeButton}) => {

        const methods = useForm()

        return(
            <FormProvider {...methods}>
                <ArmazemSelector includeBtn={includeButton} />
            </FormProvider>
        )        
    }

    it('should render without crashing', () => {
        render(<TestComponent />)
    })

    it('should dynamically render a button', () => {
        const { rerender, queryByRole } = render(<TestComponent />)

        expect(queryByRole('button')).toBeNull()

        rerender(<TestComponent includeButton />)

        expect(queryByRole('button')).toBeInTheDocument()
    })
})