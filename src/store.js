import { createStore, combineReducers } from 'redux'
import { ingredienteReducer, armazemReducer } from './reducers'

const rootReducer = combineReducers({
    ingrediente: ingredienteReducer,
    armazem: armazemReducer,
})

const store = createStore(rootReducer)

export default store
