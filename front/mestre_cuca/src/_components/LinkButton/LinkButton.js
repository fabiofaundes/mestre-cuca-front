import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

const StyledButton = styled.button `
  background: none;
  border: none;
  padding: 0;

  font-family: 'Roboto Slab';
  font-size: 18px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;    
  }  

  &.active {
    font-weight: bold;
  }
`

const LinkButton = ({ onClick, text, history, path, children, id }) => {

  const handleLinkClick = () => {
    if (onClick) onClick()

    history.push(path)
  }

  return(
    <StyledButton text={text}  onClick={handleLinkClick} id={id}>
      {children}
    </StyledButton>
  )
}

export default withRouter(LinkButton)