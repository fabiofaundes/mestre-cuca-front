import { armazemEvents } from '../actions/armazemActions'

const initialState = {
    armazens: [],
}

const armazemReducer = (state = initialState, action) => {
    switch(action.type) {

        case armazemEvents.INSERT_ARMAZEM:
            return {
                ...state,
                armazens: [
                    ...state.armazens,
                    action.added
                ]
            }

        case armazemEvents.DELETE_ARMAZEM:
            return {
                ...state,
                armazens: state.armazens
                    .filter(arm => arm.id !== action.id)
            }

        case armazemEvents.UPDATE_ARMAZEM:

            const index = state.armazens.findIndex(arm => arm.id === action.id)

            if(index >= 0)
                return {
                    ...state,
                    armazens: [
                        ...state.armazens.slice(0, index),
                        action.updated,
                        ...state.armazens.slice(index, state.armazens.length)
                    ]
                }

            return state

        default:
            return state
    }
}

export default armazemReducer