import { ADD_COMMA, ADD_DIGIT, ADD_ZERO, UNARY_OP, EXEC_OP, CLEAR_OP, CANCEL_ERROR_OP } from "./Actions.js"
import { CalculatorState } from "./State.js"

const initialState = new CalculatorState()

const reducer = (state = initialState, action) => {
    var display = state.display
    switch (action.type) {
        case CANCEL_ERROR_OP:
            return { ...state, mustClearDisplay: true, display: '0.0' }
        case CLEAR_OP:
            return { ...state, ...initialState }
        case ADD_DIGIT:
            if (state.mustClearDisplay)
                display = ''
            display += action.digit
            return { ...state, mustClearDisplay: false, display: display }
        case ADD_ZERO:
            if (state.mustClearDisplay)
                display = ''
            if (display.length > 0)
                display += '0'
            return { ...state, mustClearDisplay: false, display: display }
        case ADD_COMMA:
            if (state.mustClearDisplay)
                display = ''
            if (display.length === 0) display = '0.'
            if (!display.includes('.')) display += '.'
            return { ...state, mustClearDisplay: false, display: display }
        case EXEC_OP:
            var accumulator = state.accumulator
            const value = parseFloat(state.display)
            switch (state.nextOperation) {
                case '+':
                    accumulator += value
                    break;
                case '-':
                    accumulator -= value
                    break;
                case '*':
                    accumulator *= value
                    break;
                case '/':
                    accumulator /= value
                    break;
                default:
                    accumulator = value
            }
            return {
                ...state,
                mustClearDisplay: true,
                accumulator: accumulator,
                display: "" + accumulator,
                nextOperation: action.operation
            }
        case UNARY_OP:
            return { ...state, display: action.operation(parseFloat(display)) }
        default:
            return state
    }
}

export default reducer