import { Button } from "../Button/Button.js";
import { Display } from "../Display/Display.js";
import { useDispatch } from "react-redux"
import { addCommaAction, addDigitAction, addZeroAction, unaryOperationAction, executeOperationAction, clearOperationAction, cancelErrorAction } from "../StateManagement/Actions.js";
import './Calculator.css'

export function Calculator() {
    const dispatch = useDispatch()
    const addDigit = (d) => { dispatch(addDigitAction(d)) }

    return (
        <div className="calculator">
            <div className="row">
                <Display></Display>
            </div>
            <div className="row">
                <div className="spacer">MyCalculator</div>
                <Button text='C' className='special' onClick={() => { dispatch(clearOperationAction()) }}></Button>
                <Button text='CE' className='special' onClick={() => { dispatch(cancelErrorAction()) }}></Button>
                <Button text={'\xf7'} className='operator' onClick={() => dispatch(executeOperationAction('/'))}></Button>
            </div>
            <div className="row">
                <Button text='7' onClick={() => addDigit('7')}></Button>
                <Button text='8' onClick={() => addDigit('8')}></Button>
                <Button text='9' onClick={() => addDigit('9')}></Button>
                <Button text={'\xd7'} className='operator' onClick={() => dispatch(executeOperationAction('*'))}></Button>
            </div>
            <div className="row">
                <Button text='4' onClick={() => addDigit('4')}></Button>
                <Button text='5' onClick={() => addDigit('5')}></Button>
                <Button text='6' onClick={() => addDigit('6')}></Button>
                <Button text='-' className='operator' onClick={() => dispatch(executeOperationAction('-'))}></Button>
            </div>
            <div className="row">
                <Button text='1' onClick={() => addDigit('1')}></Button>
                <Button text='2' onClick={() => addDigit('2')}></Button>
                <Button text='3' onClick={() => addDigit('3')}></Button>
                <Button text={'\x2b'} className='operator' onClick={() => dispatch(executeOperationAction('+'))}></Button>
            </div>
            <div className="row">
                <Button text={'x\xb2'} onClick={() => { dispatch(unaryOperationAction(v => v * v)) }}></Button>
                <Button text='0' onClick={() => dispatch(addZeroAction())}></Button>
                <Button text=',' onClick={() => dispatch(addCommaAction())}></Button>
                <Button text={'\x3d'} className='operator' onClick={() => dispatch(executeOperationAction('='))}></Button>
            </div>
        </div>
    )
}