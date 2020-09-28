import React from 'react'
import styled from 'styled-components'
import { Input, Button, ReactSelect } from '../StyledComponents'
import PropTypes, { string } from 'prop-types'

const ComponentsBox = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;

  margin-top: 20px;

  & > * {
    margin-right: 20px;
  }
`

const Filter = ({ target, className }) => {
  
  const getTitleText = () => {    
    switch (target) {
      case 'ingrediente':
        return 'Filtrar Ingredientes'        
    
      case 'armazem':
        return 'Filtrar Armazéns'
      
      default:
        return 'Filtrar'
    }
  }

  const renderExtraComponents = () => {
    switch(target) {
      case 'ingrediente':
        return <ReactSelect placeholder="Armazéns"/>
      default:
        return <></>
    }
  }  

  return (
    <div className={`${className}`}>      
      <h2 className='title'>{getTitleText()}</h2>
      <ComponentsBox>
        { renderExtraComponents() }
        <Input type='text' placeholder="Nome, quantidade..."/>      
        <Button>FILTRAR</Button>
      </ComponentsBox>
    </div>
  )
}

Filter.propTypes = {
  target: PropTypes.oneOf(['ingrediente', 'armazem']),
  className: string,
}

Filter.defaultProps = {
  className: '',
}

export default Filter