import React from 'react'
import styled from 'styled-components'
import Select, { components } from 'react-select'

const StyledSelect = styled(Select)`
  font-family: Roboto Slab;
  width: 240px;
  display: block;

  .react-select__control {   
    height: 52px;
    box-sizing: border-box;
    border: 1px solid #000000;
    border-radius: 5px;    
    
    font-size: 14px;
  }
`

const NoOptionsMessage = props => {
  return (
    <components.NoOptionsMessage {...props}>
      <span style={{fontSize: "14px"}}>Nenhuma opção disponível</span>
    </components.NoOptionsMessage>
  )
}

const ReactSelect = (props) => {
  return(
    <div className="d-flex flex-column align-items-start">
      <label htmlFor={props.name}>{props.label}</label>
      <StyledSelect components={{NoOptionsMessage}} classNamePrefix="react-select" {...props} />
    </div>
  )  
}

ReactSelect.defaultProps = {
  placeholder: 'Selecionar...'
}

export default ReactSelect