import React from 'react'
import { render } from '@testing-library/react'
import LabeledInput from '../LabeledInput/LabeledInput'
import { FormProvider, useForm } from 'react-hook-form'

describe('<LabeledInput />', () => {

  const TestComponent = ({id, label}) => {

    const methods = useForm()

    return(
      <FormProvider {...methods}>
        <LabeledInput name='txtTest' id={id} label={label} />
      </FormProvider>
    )
  }

  it('should render without crashing', () => {
    render(<TestComponent id="txtTest" label="Test"/>)
  })

  it('should render a label', () => {
    const {getByText} = render(<TestComponent id="txtTest" label="Test"/>)

    expect(getByText("Test")).toBeInTheDocument()
  })
})