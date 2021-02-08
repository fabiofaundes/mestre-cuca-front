import React, { useCallback, useEffect, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import PropTypes from 'prop-types'
import { FormHead, FormWrapper, StyledForm, Title } from './styledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faPlusCircle, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import LabeledInput from '../LabeledInput/LabeledInput'

const crudTargets = {
  INGREDIENTE: 'INGREDIENTE',
}

const crudActions = {
  UPDATE: 'UPDATE',
  CREATE: 'CREATE',
}

const CrudForm = ({target, action, className}) => {
 
  const [titleContent, setTitleContent] = useState("")
  const [icon, setIcon] = useState()

  const methods = useForm()

  //set title content and icon depending on target and action
  useEffect(() => {
    let newTitleContent = ""

    switch(action){
      case crudActions.UPDATE:
        newTitleContent = "Edite o "
        setIcon(faPen)
        break

      case crudActions.CREATE:
        newTitleContent = "Adicione um "
        setIcon(faPlusSquare)
        break
        
      default:
        break;
    }

    switch(target){
      case crudTargets.INGREDIENTE:
        newTitleContent += "Ingrediente"
        break

      default:
        break
    }
    setTitleContent(newTitleContent)
  }, [target, action])

  const formSubmitted = (data) => {

  }

  return(
    <FormWrapper className={className}>

      <FormHead>
        <Title>
          <FontAwesomeIcon icon={icon} />
          {titleContent}
        </Title>
      </FormHead>

      <FormProvider {...methods}>
        <StyledForm onSubmit={methods.handleSubmit(formSubmitted)}>
          <LabeledInput
            label="Nome*"
            name="name"            
          />        
        </StyledForm>
      </FormProvider>

    </FormWrapper>
  )
}

CrudForm.targets = crudTargets
CrudForm.actions = crudActions

CrudForm.propTypes = {
  target: PropTypes.oneOf(Object.values(crudTargets)),
  action: PropTypes.oneOf(Object.values(crudActions)),
  className: PropTypes.string  
}

CrudForm.defaultProps = {
  target: crudTargets.INGREDIENTE,
  action: crudActions.CREATE
}

export default CrudForm