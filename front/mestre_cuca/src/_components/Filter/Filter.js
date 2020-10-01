import React from 'react'
import styled from 'styled-components'
import { Button, ReactSelect } from '../StyledComponents'
import LabeledInput from '../LabeledInput/LabeledInput'
import PropTypes, { string } from 'prop-types'

const ComponentsBox = styled.div`
  display: flex;
  align-items: flex-end;
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

  const getPlaceHolderText = () => {
    switch (target) {
      case 'ingrediente':
        return 'Nome, quantidade...'
    
      case 'armazem':
        return 'Nome...'
      
      default:
        return ''
    }
  }

  const renderExtraComponents = () => {
    switch(target) {
      case 'ingrediente':
        return <ReactSelect placeholder="Selecionar..." label="Armazéns"/>
      default:
        return <></>
    }
  }  

  return (
    <div className={`${className}`}>      
      <h2 className='title'>{getTitleText()}</h2>
      <ComponentsBox>
        { renderExtraComponents() }
        <LabeledInput
          type="search"
          id="txtFilterSearch"
          name="filterSearch"
          placeholder={getPlaceHolderText()}
          label="Pesquisa"
        />      
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