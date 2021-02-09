export const ingredienteEvents = {
  PREPARE_INGREDIENTE_UPDATE: 'PREPARE_INGREDIENTE_UPDATE',
  UPDATE_INGREDIENTE: 'UPDATE_INGREDIENTE',
  DELETE_INGREDIENTE: 'DELETE_INGREDIENTE',
  INSERT_INGREDIENTE: 'INSERT_INGREDIENTE',
}

export const ingredienteActions = {
  prepUpdateIngrediente: (ingredienteId) => ({
    type: ingredienteEvents.PREPARE_INGREDIENTE_UPDATE,
    id: ingredienteId
  }),
  updateIngrediente: (updatedIngrediente) => ({
    type: ingredienteEvents.UPDATE_INGREDIENTE,
    updated: updatedIngrediente
  }),
  deleteIngrediente: (ingredienteId) => ({
    type: ingredienteEvents.DELETE_INGREDIENTE,
    id: ingredienteId
  }),
  insertIngrediente: (ingrediente) => ({
    type: ingredienteEvents.INSERT_INGREDIENTE,
    added: ingrediente,
  })
}