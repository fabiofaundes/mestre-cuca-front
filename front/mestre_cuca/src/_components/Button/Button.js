import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button `

`

const Button = ({ onClick, text }) => {
  return(
    <StyledButton text={text}  onClick={onClick} />
  )
}

export default Button