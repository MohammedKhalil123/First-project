import React, { useState } from 'react';
import classes from './Bin2Dec.module.css';



const Bin2Dec = props => {

    const [Conversion, setConversion] = useState('Bin2Dec')
    const [Binary, setBinary] = useState('')
    const [Decimal, setDecimal] = useState('')


    const onChangeHandler = (event) => {
        if (Conversion === 'Bin2Dec'  ) {
            let arr = event.target.value.split('')
            let reversed = arr.reverse();
            let final = reversed.join('')
            setBinary(event.target.value);
            let num = 0
            for (let i = 0; i < final.length; i++) {
                num += parseInt(final[i]) * Math.pow(2, i);
            }
            setDecimal(num)
        }
        else if (Conversion === 'Dec2Bin') {
            setBinary(event.target.value);
            let num = parseInt(event.target.value);
            let result = '' ;
            while (num >= 1) {
                let str = num % 2
    
                num = Math.floor(num / 2)
                str = str.toString() 
                result += str; 
            }
            let arr = result.split('')
            let reversed = arr.reverse();
            result = reversed.join('')
            setDecimal(result)
        }
    }

    const Swap = () => {
        if (Conversion === 'Bin2Dec') {
            setConversion('Dec2Bin')
            document.getElementById('firstinput').innerHTML = 'Decimal'
            document.getElementById('secondinput').innerHTML = 'Binary'
            setDecimal('')
            setBinary('')

        } else if (Conversion === 'Dec2Bin') {
            setConversion('Bin2Dec')
            document.getElementById('firstinput').innerHTML = 'Binary'
            document.getElementById('secondinput').innerHTML = 'Decimal'
            setDecimal('')
            setBinary('')
        }

    }

    return (
        <div className={classes.Bin2Dec}>
            <h1 className={classes.Header}>Binary/Decimal Converter</h1>
            <label id='firstinput'>Binary</label>
            <input type='text' value={Binary} onChange={(event) => onChangeHandler(event)} />
            <label id='secondinput'>Decimal</label>
            <input type='text' value={Decimal} onChange={(event) => onChangeHandler(event)} />
            <button onClick={() => Swap()} > Switch</button>
        </div>
    )
}

export default Bin2Dec;