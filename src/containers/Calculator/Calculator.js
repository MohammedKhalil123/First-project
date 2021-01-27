import React, { useState } from 'react'
import classes from './Calculator.module.css'

const Calculator = props => {

    const [Score, setScore] = useState('0')
    const [firsnumber, setFirsnumber] = useState(0)
    const [operation, setOperation] = useState('start')
    const [currentState,setCurrentState] = useState('')
    const [history,setHistory] = useState([])

    const edgeclass = [classes.Otherbuttonelements, classes.EdgeButton];

    const getResult = (operator) => {
        switch (operator) {
            case 'PLUS':
                let s = parseFloat(firsnumber) + parseFloat(Score)
                setScore(s.toString());
                setHistory([...history , parseFloat(firsnumber)+ parseFloat(Score) ])
                setOperation('start')
                break;
            case 'MINUS':
                setScore(firsnumber- parseFloat(Score));
                setHistory([...history , firsnumber- parseFloat(Score) ])
                setOperation('start')
                break;
            case 'MULTIPLE':
                setScore(firsnumber* parseFloat(Score));
                setHistory([...history , firsnumber* parseFloat(Score) ])
                setOperation('start')
                break;
            case 'DEVISION':
                setScore(firsnumber/ parseFloat(Score));
                setHistory([...history , firsnumber/ parseFloat(Score) ])
                setOperation('start')
                break;
            default:
                return 'Error'

        }
    }

    const settingScore = (number) => {
        if(operation === 'start'){
            if(number === '.'){
                number = '0.'
            }
            setScore(number)
            setOperation('')
        }else if(currentState === 'second' ){
            if(number === '.'){
                number = '0.'
            }
            setScore(number)
            setCurrentState('')
            
        }else if(Score.includes('.') && number === '.'){
            return;
        }
        else{
            console.log(number)
            setScore(Score + number)
        }

    }

    const clear = () => {
        setScore('0');
        setFirsnumber(0);
        setOperation('start')
        setCurrentState('')
    }

    let historydata = history.map(history => {
        return <div className={classes.Historyitem} key={history}>{history}</div>
    })

    return (
        <div className={classes.Container}>
            
        <div className={classes.Calculator}>
            <div className={classes.Score}>
                {Score}
            </div>
            <div className={classes.Firstrow}>
                <button className={classes.Firstrowelements} onClick={() => { setOperation('PLUS'); setFirsnumber(Score) ;setCurrentState('second')}}>+</button>
                <button className={classes.Firstrowelements} onClick={() => { setOperation('MINUS'); setFirsnumber(Score);setCurrentState('second') }}>-</button>
                <button className={classes.Firstrowelements} onClick={() => { setOperation('MULTIPLE'); setFirsnumber(Score);setCurrentState('second') }}>&times;</button>
                <button className={classes.Firstrowelements} onClick={() => { setOperation('DEVISION'); setFirsnumber(Score); setCurrentState('second')}}>÷</button>
            </div>
            <div className={classes.Secondrow}>

                <div className={classes.Otherbuttons}>

                    <button className={classes.Otherbuttonelements} onClick={() => settingScore('7')}>7</button>
                    <button className={classes.Otherbuttonelements} onClick={() => settingScore('8')}>8</button>
                    <button className={classes.Otherbuttonelements} onClick={() => settingScore('9')}>9</button>
                    <button className={classes.Otherbuttonelements} onClick={() => settingScore('4')}>4</button>
                    <button className={classes.Otherbuttonelements} onClick={() => settingScore('5')}>5</button>
                    <button className={classes.Otherbuttonelements} onClick={() => settingScore('6')}>6</button>
                    <button className={classes.Otherbuttonelements} onClick={() => settingScore('1')}>1</button>
                    <button className={classes.Otherbuttonelements} onClick={() => settingScore('2')}>2</button>
                    <button className={classes.Otherbuttonelements} onClick={() => settingScore('3')}>3</button>
                    <button className={edgeclass.join(' ')} onClick={() => settingScore('0')}>0</button>
                    <button className={classes.Otherbuttonelements} onClick={() => settingScore('.')}>.</button>
                    <button className={classes.Otherbuttonelements} onClick={() => clear()}>AC</button>
                </div>
                <button className={classes.Equal} onClick={() => getResult(operation)}>
                    =
            </button>
            </div>

        </div>

        <div className={classes.History}>
            <div className={classes.Historytitle}>History</div>
            <hr className={classes.linebreak}></hr>
            {historydata}
        </div>
        </div>
    )

}



export default Calculator;