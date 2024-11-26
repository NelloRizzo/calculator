// aggiunta di una cifra al display
export const ADD_DIGIT = "add-digit"
// aggiunta di uno zero al display
export const ADD_ZERO = "add-zero"
// aggiunta della virgola decimale al display
export const ADD_COMMA = "add-comma"
// richiesta di memorizzare la prossima operazione
export const EXEC_OP = "execute-operation"
// esecuzione di una operazione "unaria" direttamente sul display
export const UNARY_OP = "unary-operation"
export const CLEAR_OP = "clear"
export const CANCEL_ERROR_OP = "cancel"

export const addDigitAction = (d) => ({ type: ADD_DIGIT, digit: d })
export const addZeroAction = () => ({ type: ADD_ZERO })
export const addCommaAction = () => ({ type: ADD_COMMA })
export const executeOperationAction = (op) => ({ type: EXEC_OP, operation: op })
export const unaryOperationAction = (op) => ({ type: UNARY_OP, operation: (display) => op(display) })
export const clearOperationAction = () => ({ type: CLEAR_OP })
export const cancelErrorAction = () => ({ type: CANCEL_ERROR_OP })
