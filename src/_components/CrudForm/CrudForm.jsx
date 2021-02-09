import React, { useEffect, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import PropTypes from 'prop-types'

import { FormHead, FormWrapper, StyledForm, Title } from './styledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import LabeledInput from '../LabeledInput/LabeledInput'
import { ingredienteComponents } from './specificComponents'
import { Button } from '../StyledComponents'

const crudTargets = {
  INGREDIENTE: 'INGREDIENTE',
}

const crudActions = {
  UPDATE: 'UPDATE',
  CREATE: 'CREATE',
}

const CrudForm = ({target, action, className}) => {
 
  const [titleContent, setTitleContent] = useState("")
  const [submitText, setSubmitText] = useState()
  const [icon, setIcon] = useState()
  const [specificComponents, setSpecificComponents] = useState()

  const methods = useForm()

  //set title content and icon depending on target and action
  useEffect(() => {
    let newTitleContent = ""
    let newSubmitText = ""

    switch(action){
      case crudActions.UPDATE:
        newTitleContent = "Edite o "
        newSubmitText = "ALTERAR "
        setIcon(faPen)
        break

      case crudActions.CREATE:
        newTitleContent = "Adicione um "
        newSubmitText = "INCLUIR "
        setIcon(faPlusSquare)
        break
        
      default:
        break;
    }

    switch(target){
      case crudTargets.INGREDIENTE:
        newTitleContent += "Ingrediente"
        newSubmitText += "INGREDIENTE"
        setSpecificComponents(ingredienteComponents)
        break

      default:
        break
    }

    setTitleContent(newTitleContent)
    setSubmitText(newSubmitText)
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
            id='txtNome'
          />

          {specificComponents}

          <Button
            id='btnSubmitCrudForm'
            type='submit'            
          >
            {submitText}
          </Button>
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