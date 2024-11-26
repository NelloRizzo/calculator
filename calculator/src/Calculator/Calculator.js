import { Button } from "../Button/Button.js";
import { Display } from "../Display/Display.js";
import { useDispatch } from "react-redux"
import { addCommaAction, addDigitAction, addZeroAction, unaryOperationAction, executeOperationAction, binaryOperationAction } from "../StateManagement/Actions.js";

export function Calculator() {
    const dispatch = useDispatch()
    const addDigit = (d) => { dispatch(addDigitAction(d)) }

    return (
        <>
            <Display></Display>
            <div>
                <Button text='7' onClick={() => addDigit('7')}></Button>
                <Button text='8' onClick={() => addDigit('8')}></Button>
                <Button text='9' onClick={() => addDigit('9')}></Button>
            </div>
            <div>
                <Button text='4' onClick={() => addDigit('4')}></Button>
                <Button text='5' onClick={() => addDigit('5')}></Button>
                <Button text='6' onClick={() => addDigit('6')}></Button>
            </div>
            <div>
                <Button text='1' onClick={() => addDigit('1')}></Button>
                <Button text='2' onClick={() => addDigit('2')}></Button>
                <Button text='3' onClick={() => addDigit('3')}></Button>
                <Button text='+' onClick={() => dispatch(executeOperationAction('+'))}></Button>
            </div>
            <div>
                <Button text='^2' onClick={() => { dispatch(unaryOperationAction(v => Math.pow(v, 2))) }}></Button>
                <Button text='0' onClick={() => dispatch(addZeroAction())}></Button>
                <Button text=',' onClick={() => dispatch(addCommaAction())}></Button>
                <Button text='=' onClick={() => dispatch(executeOperationAction('='))}></Button>
            </div>
        </>
    )
}