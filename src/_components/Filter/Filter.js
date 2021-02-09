import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FormProvider, useForm } from 'react-hook-form'

import { Button } from '../StyledComponents'
import LabeledInput from '../LabeledInput/LabeledInput'
import ArmazemSelector from '../ArmazemSelector/ArmazemSelector'

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
  
  const [titleText, setTitleText] = useState()
  const [placeholderText, setPlaceholderText] = useState()
  const [extraComponents, setExtraComponents] = useState()

  const methods = useForm()

  useEffect(() => {
    switch(target) {
      case 'ingrediente':
        setTitleText("Filtrar Ingredientes")
        setPlaceholderText("Nome, quantidade...")
        setExtraComponents(<ArmazemSelector />)
        break;
      case 'armazem':
        setTitleText("Filtrar Armazéns")
        setPlaceholderText("Nome...")
        break;
      default:
        break
    }    
  }, [target])

  return (
    <div className={`${className}`}>      
      <h2 className='title'>{titleText}</h2>
      <ComponentsBox>
        <FormProvider {...methods}>
          { extraComponents }
          <LabeledInput
            type="search"
            id="txtFilterSearch"
            name="filterSearch"
            placeholder={placeholderText}
            label="Pesquisa"
          />      
          <Button type="submit">FILTRAR</Button>
        </FormProvider>
      </ComponentsBox>
    </div>
  )
}

Filter.propTypes = {
  target: PropTypes.oneOf(['ingrediente', 'armazem']),
  className: PropTypes.string,
}

Filter.defaultProps = {
  className: '',
}

export default Filter