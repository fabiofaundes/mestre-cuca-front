import { ingredienteEvents } from '../actions/ingredienteActions'

const initialState = {
  ingredientes: [],
  ingredienteToEdit: {empty: true},
}

const ingredienteReducer = (state = initialState, action) => {

  switch(action.type) {

    case ingredienteEvents.PREPARE_INGREDIENTE_UPDATE:
      return {
        ...state,
        ingredienteToEdit: state.ingredientes.find(item => item.id === action.id)
      }

    case ingredienteEvents.UPDATE_INGREDIENTE:
      const updatedIngredientes = state.ingredientes.map((item) => {
        if(item.id === action.updated.id)
          return state.updated

        return item
      })

      return {
        ...state,
        ingredienteToEdit: {empty: true},
        ingredientes: updatedIngredientes,
      }
    
    case ingredienteEvents.DELETE_INGREDIENTE:
      return {
        ...state,
        ingredientes: state.ingredientes
          .filter(ing => ing.id !== action.id)
      }
    
    case ingredienteEvents.INSERT_INGREDIENTE:
      return {
        ...state,
        ingredientes: [
          ...state.ingredientes,
          action.added,
        ]
      }

    default:
      return state
  }
}

export default ingredienteReducer