export const ADD_DIGIT = "add_digit"
export const ADD_ZERO = "add_zero"
export const ADD_COMMA = "add_comma"
export const EXEC_OP = "execute_operation"
export const UNARY_OP = "unary_operation"

export const addDigitAction = (d) => ({ type: ADD_DIGIT, digit: d })
export const addZeroAction = () => ({ type: ADD_ZERO })
export const addCommaAction = () => ({ type: ADD_COMMA })
export const executeOperationAction = (op) => ({ type: EXEC_OP, operation: op })
export const unaryOperationAction = (op) => ({ type: UNARY_OP, operation: (display) => op(display) })
