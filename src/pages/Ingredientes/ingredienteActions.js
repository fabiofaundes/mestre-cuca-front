import { ingredienteEvents } from './ingredienteEvents'

export const ingredienteActions = {
  prepUpdateIngrediente: (ingredienteId) => ({
    type: ingredienteEvents.PREPARE_INGREDIENTE_UPDATE,
    id: ingredienteId
  }),
  updateIngrediente: (updatedIngrediente) => ({
    type: ingredienteEvents.UPDATE_INGREDIENTE,
    updated: updatedIngrediente
  })
}