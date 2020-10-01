import styled from 'styled-components'
import { colors } from '../../_helpers'
import ReactSelect from './ReactSelect'

const Input = styled.input `
  display: block;

  box-sizing: border-box;
  height: 52px;
  background: none;
  border: 1px solid ${colors.black};
  border-radius: 5px;
  padding: 17px 20px;
  
  font-family: Roboto Slab;
  font-size: 14px;

  &:hover {
    border-color: rgba(0, 0, 0, 0.2)
  }

  &[type="search"] {
    outline-offset: unset;

    &::-webkit-search-cancel-button{
      -webkit-appearance: none;
      padding: 5px;
      background-color: ${colors.red};
      border-radius: 100%;
    }    
  }
`

const Button = styled.button `
  background: ${colors.defaultOrange};
  border: 1px solid ${colors.black};
  border-radius: 5px;
  box-sizing: border-box;
  
  padding: 10px 20px;
  min-height: 52px;

  font-family: Roboto Slab;
  font-size: 18px;
  font-weight: bold;
`

export { Input, Button, ReactSelect }