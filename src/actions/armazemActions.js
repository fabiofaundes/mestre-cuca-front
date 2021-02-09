export const armazemEvents = {
    INSERT_ARMAZEM: 'INSERT_ARMAZEM',
    DELETE_ARMAZEM: 'DELETE_ARMAZEM',
    UPDATE_ARMAZEM: 'UPDATE_ARMAZEM',
}

const armazemActions = {
    insertArmazem: (armazem) => ({
        type: armazemEvents.INSERT_ARMAZEM,
        added: armazem,
    }),
    deleteArmazem: (id) => ({
        type: armazemEvents.DELETE_ARMAZEM,
        id,
    }),
    updateArmazem: (armazem) => ({
        type: armazemEvents.UPDATE_ARMAZEM,
        updated: armazem,
    }),
}

export default armazemActions