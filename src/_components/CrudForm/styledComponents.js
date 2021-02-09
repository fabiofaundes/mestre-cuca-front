import styled from 'styled-components'
import { colors } from '../../_helpers'

export const StyledForm = styled.form `
  padding: 10px 20px;

  & > * {
    margin-bottom: 20px;
  }
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 2px solid ${colors.darkOrange};

  font-family: Roboto Slab;
`

export const FormHead = styled.div `
  height: 46px;
  padding: 10px 20px;
  box-sizing: border-box;
  border-bottom: 2px solid ${colors.darkOrange}
`

export const Title = styled.h3 `
  display: inline-block;  
  margin: 0;

  font-size: 18px;
  font-weight: bold;

  svg {
    margin-right: 10px;
  }
`