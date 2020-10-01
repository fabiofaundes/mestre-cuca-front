import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Input } from '../StyledComponents'

const LabeledInput = ({id, label, placeholder, type, name, disabled}) => {

  return(
    <div className='d-flex flex-column justify-content-start'>
      <label htmlFor={name}>{label}</label>
      <Input
        placeholder={placeholder}
        type={type}
        name={name}
        id={id}
        disabled={disabled}
      />      
    </div>
  )

}

LabeledInput.defaultProps = {
  type: "text",
  disabled: false,
}

LabeledInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,  
  type: PropTypes.oneOf(["text", "search"]),
  name: PropTypes.string,
  disabled: PropTypes.bool,
}

export default LabeledInput