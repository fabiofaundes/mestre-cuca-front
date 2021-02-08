import React from 'react'
import { render } from '@testing-library/react'
import LabeledInput from '../LabeledInput/LabeledInput'

describe('<LabeledInput />', () => {
  it('should render without crashing', () => {
    render(<LabeledInput id="txtTest" label="Test"/>)
  })

  it('should render a label', () => {
    const {getByText} = render(<LabeledInput id="txtTest" label="Test"/>)

    expect(getByText("Test")).toBeTruthy()
  })
})