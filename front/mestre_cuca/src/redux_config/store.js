import { createStore } from 'redux'
import { ingredienteReducer } from '../pages/Ingredientes/ingredienteSlice'

export default createStore(ingredienteReducer)