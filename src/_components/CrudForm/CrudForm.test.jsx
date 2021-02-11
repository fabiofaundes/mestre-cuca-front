import React from 'react'
import { render } from '@testing-library/react'
import CrudForm from './CrudForm'

describe('<CrudForm />', () => {
    it('should render without crashing', () => {
        render(<CrudForm />)
    })

    it('should render the correct text, icons and components', () => {
        const { rerender, queryByText, queryByTestId } = render(
            <CrudForm
                action={CrudForm.actions.CREATE}
                target={CrudForm.targets.INGREDIENTE}
            />
        )

        expect(queryByTestId('crud-title-icon')).toHaveAttribute('data-icon', 'plus-square')
        expect(queryByText('Adicione um Ingrediente')).toBeInTheDocument()
        expect(queryByText('Nome*')).toBeInTheDocument()
        expect(queryByText('Quantidade')).toBeInTheDocument()
        expect(queryByText('Armazém')).toBeInTheDocument()
        expect(queryByText('INCLUIR INGREDIENTE')).toBeInTheDocument()
    })
})