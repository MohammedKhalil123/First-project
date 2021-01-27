import React, { useState, useEffect,useRef } from "react";
import classes from './TicTacToe.module.css'

const TicTacToe = props => {

    const [player1Name, setPlayer1Name] = useState('')
    const [player2Name, setPlayer2Name] = useState('')
    const [winner, setWinner] = useState('')
    const [gameState, setGameState] = useState('')
    const [turn, setTurn] = useState('1')
    const iswinnerdecided = useRef(false);
    

    const [table, setTable] = useState({
        first: '',
        second: '',
        third: '',
        fourth: '',
        fifth: '',
        sixth: '',
        seventh: '',
        eighth: '',
        ninth: '',

    })

    useEffect(() => {
        if(table.first === table.second && table.second  === table.third && table.first !== ''){
            const win = table.first === 'x' ? player1Name : player2Name;
            iswinnerdecided.current = true;
            setWinner( win);
            setGameState('finished');
            console.log('use effect')
            
        }
        if(table.fourth === table.fifth && table.fifth  === table.sixth && table.fourth !== ''){
            const win = table.fourth === 'x' ? player1Name : player2Name;
            setWinner( win);
            setGameState('finished');
            
        }
        if(table.seventh === table.eighth && table.eighth  === table.ninth && table.seventh !== ''){
            const win = table.seventh === 'x' ? player1Name : player2Name;
            setWinner( win);
            setGameState('finished');
            
        }
        if(table.first === table.fourth && table.fourth  === table.seventh && table.seventh !== ''){
            const win = table.first === 'x' ? player1Name : player2Name;
            setWinner( win);
            setGameState('finished');
            
        }
        if(table.second === table.fifth && table.fifth  === table.eighth && table.eighth !== ''){
            const win = table.second === 'x' ? player1Name : player2Name;
            setWinner( win);
            setGameState('finished');
            
        }
        if(table.third === table.sixth && table.sixth  === table.ninth && table.ninth !== ''){
            const win = table.third === 'x' ? player1Name : player2Name;
            setWinner( win);
            setGameState('finished');
            
        }
        if(table.third === table.fifth && table.fifth  === table.seventh && table.seventh !== ''){
            const win = table.third === 'x' ? player1Name : player2Name;
            setWinner( win);
            setGameState('finished');
            
        }
        if(table.first === table.fifth && table.fifth  === table.ninth && table.ninth !== ''){
            const win = table.first === 'x' ? player1Name : player2Name;
            setWinner( win);
            setGameState('finished');
            
        }
    },[table,player1Name,player2Name,iswinnerdecided])


    const onchange1Handler = (event) => {
        setPlayer1Name(event.target.value)

    }

    const onchange2Handler = (event) => {
        setPlayer2Name(event.target.value)

    }

    const playGame = () => {
        if (player1Name.trim() !== '' && player2Name.trim() !== '') {
            setGameState('started')
            setTurn(player1Name);
            return
        }
        setGameState('invalid')
        console.log(gameState);
    }

    const Draw = (event) => {
        if(winner !== ''){
            return;
        }
        let setturn = false;
        if (turn === player1Name) {
            switch (event.target.id) {
                case '1': if(table.first === ''){setTable({ ...table, first: 'x' }) ; setturn =true; };  break;
                case '2': if(table.second === ''){setTable({ ...table, second: 'x' }) ;setturn =true; }; break;
                case '3': if(table.third === ''){setTable({ ...table, third: 'x' }); setturn =true; };break;
                case '4': if(table.fourth === ''){setTable({ ...table, fourth: 'x' });setturn =true; }; break;
                case '5': if(table.fifth === ''){setTable({ ...table, fifth: 'x' }); setturn =true; };break;
                case '6': if(table.sixth === ''){setTable({ ...table, sixth: 'x' });setturn =true; }; break;
                case '7': if(table.seventh === ''){setTable({ ...table, seventh: 'x' });setturn =true; }; break;
                case '8': if(table.eighth === ''){setTable({ ...table, eighth: 'x' });setturn =true; }; break;
                case '9': if(table.ninth === ''){setTable({ ...table, ninth: 'x' });setturn =true; }; break;
                default: break;
            }
            if(setturn)
            setTurn(player2Name)
        }
        else if (turn === player2Name) {
            switch (event.target.id) {
                case '1': if(table.first === ''){setTable({ ...table, first: 'o' });setturn =true; }; break;
                case '2': if(table.second === ''){setTable({ ...table, second: 'o' });setturn =true; }; break;
                case '3': if(table.third === ''){setTable({ ...table, third: 'o' });setturn =true; }; break;
                case '4': if(table.fourth === ''){setTable({ ...table, fourth: 'o' });setturn =true; }; break;
                case '5': if(table.fifth === ''){setTable({ ...table, fifth: 'o' });setturn =true; }; break;
                case '6': if(table.sixth === ''){setTable({ ...table, sixth: 'o' });setturn =true; }; break;
                case '7': if(table.seventh === ''){setTable({ ...table, seventh: 'o' });setturn =true; }; break;
                case '8': if(table.eighth === ''){setTable({ ...table, eighth: 'o' });setturn =true; }; break;
                case '9': if(table.ninth === ''){setTable({ ...table, ninth: 'o' }); setturn =true; };break;
                default: break;
            }
            if(setturn)
            setTurn(player1Name)
        }
        
    }

    const Restart = () =>{
        setGameState('')
        setPlayer1Name('')
        setPlayer2Name('')
        setTable({
            first: '',
            second: '',
            third: '',
            fourth: '',
            fifth: '',
            sixth: '',
            seventh: '',
            eighth: '',
            ninth: '',
    
        })
        setWinner('')
        setTurn('1')
        iswinnerdecided.current = false;
       
    }

    let Form = <div className={classes.GameForm}>
        <h2>Tic Tac Toe</h2>
        <label>First player Name :</label>
        <input type='text' placeholder="First Player" onChange={(event) => onchange1Handler(event)}></input>
        <label>Second Player Name :</label>
        <input type='text' placeholder="Second Player" onChange={(event) => onchange2Handler(event)}></input>
        {gameState === 'invalid' ? <p className={classes.Validation}>Please fill out the form</p> : null}
        <button onClick={() => playGame()}>Start</button>
    </div>

    if (gameState === 'started' ) {
        Form = <div className={classes.Turns}>
            <h1>It is {turn === player1Name ? player1Name : player2Name}'s turn</h1>
            <hr style={{ backgroundColor: 'black', height: '2px', width: '300px', margin: '0px auto' }} />
        </div>
    }

    if (gameState === 'finished'|| iswinnerdecided.current) {
        console.log('iswinnerdecided')
        
        Form = <div  className={classes.Winner}>
            <h1>Winner is {winner}</h1>
            <hr style={{ backgroundColor: 'black', height: '2px', width: '300px', margin: '0px auto' }} />
            <button id='finish' onClick={() => Restart()}>Play Again</button></div>
    }
    return (
        <div className={classes.TicTacToe}>
            <div className={classes.tictactoe}>
                <div id='1' className={classes.Grid} onClick={(event) => Draw(event)} style={{ borderRadius: '15px 0px 0px 0px ' }} ><div className={table.first === 'x' ? classes.X : table.first === 'o' ? classes.circle : null}></div></div>
                <div id='2' className={classes.Grid} onClick={(event) => Draw(event)}><div className={table.second === 'x' ? classes.X : table.second === 'o' ? classes.circle : null}></div></div>
                <div id='3' className={classes.Grid} onClick={(event) => Draw(event)} style={{ borderRadius: '0px 15px 0px 0px ' }}><div className={table.third === 'x' ? classes.X : table.third === 'o' ? classes.circle : null} ></div></div>
                <div id='4' className={classes.Grid} onClick={(event) => Draw(event)}><div className={table.fourth === 'x' ? classes.X : table.fourth === 'o' ? classes.circle : null}></div></div>
                <div id='5' className={classes.Grid} onClick={(event) => Draw(event)}><div className={table.fifth === 'x' ? classes.X : table.fifth === 'o' ? classes.circle : null}></div></div>
                <div id='6' className={classes.Grid} onClick={(event) => Draw(event)}><div className={table.sixth === 'x' ? classes.X : table.sixth === 'o' ? classes.circle : null}></div></div>
                <div id='7' className={classes.Grid} onClick={(event) => Draw(event)} style={{ borderRadius: '0px 0px 0px 15px ' }}><div className={table.seventh === 'x' ? classes.X : table.seventh === 'o' ? classes.circle : null}></div></div>
                <div id='8' className={classes.Grid} onClick={(event) => Draw(event)}><div className={table.eighth === 'x' ? classes.X : table.eighth === 'o' ? classes.circle : null}></div></div>
                <div id='9' className={classes.Grid} onClick={(event) => Draw(event)} style={{ borderRadius: '0px 0px 15px 0px ' }}><div className={table.ninth === 'x' ? classes.X : table.ninth === 'o' ? classes.circle : null}></div></div>
            </div>
            {Form}
        </div>
    )
}

export default TicTacToe;