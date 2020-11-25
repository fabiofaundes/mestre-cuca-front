const initialState = {
  ingredientes: [

  ],
}

export const ingredienteReducer = (state = initialState, action) => {

  switch(action.type) {

    case 'PREPARE_UPDATE_INGREDIENTE':
      return {
        ...state,
        ingredienteToEdit: state.ingredientes.filter(item => item.id == action.id)[0]
      }

    case 'UPDATE_INGREDIENTE':
      const updatedIngredientes = state.ingredientes.map((item) => {
        if(item.id === action.updated.id)
          return state.updated

        return item
      })

      return {
        ...state,
        ingredienteToEdit: undefined,
        ingredientes: updatedIngredientes,
      }

    default:
      return state
  }
}