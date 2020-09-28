import React from 'react'
import styled from 'styled-components'
import Select, { components } from 'react-select'

const ReactSelect = styled(Select)`
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

export default (props) => <ReactSelect components={{NoOptionsMessage}} classNamePrefix="react-select" {...props} />