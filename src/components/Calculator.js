/* eslint-disable no-new-func */
import React, { useState } from "react";
import { Display } from "./Display";
import { Keypad } from "./Keypad";
import fitty from 'fitty'
import './calculator.css';


const Calculator = () =>{

    fitty('input');

    const [input, setInput] = useState('')
    const [error, setError] = useState(false)
    const canVibrate = window.navigator.vibrate

    const handleClick = (event) => {
        
        try{
            if(event.target.value==='C'){
                setInput('')
            }
            else if(error === false)
            {
                if(input.toString().slice(-1)===('+')||input.toString().slice(-1)===('-')||input.toString().slice(-1)===('/')||input.toString().slice(-1)===('*')||input.toString().slice(-1)===('.'))
                {
                    if(event.target.value==='+'||event.target.value==='-'||event.target.value==='/'||event.target.value==='*'||event.target.value==='='||event.target.value==='.')
                    {
                        setInput(input + '')
                    }
                    else{
                        //setInput((event.target.value === '=')?eval(input):input + event.target.value);
                        setInput((event.target.value === '=')?(new Function('return '+input))():input + event.target.value);
                    }
                }
                else{
                    setInput((event.target.value === '=')?(new Function('return '+input))():input + event.target.value);
                }
            }
            else{
                setInput('');
                setError(false)
            }
            if (canVibrate) window.navigator.vibrate(100)
        }
        catch(error){
            setInput("ERROR");
            setError(true)
            //console.error(error)
        }
    }

    return(
        <div className="calculator-container">
            <div className="top-bar"><svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 16H5V5h14v14Z"></path>
  <path d="M11.25 7.72h-5v1.5h5v-1.5Z"></path>
  <path d="M18 15.75h-5v1.5h5v-1.5Z"></path>
  <path d="M18 13.25h-5v1.5h5v-1.5Z"></path>
  <path d="M8 18h1.5v-2h2v-1.5h-2v-2H8v2H6V16h2v2Z"></path>
  <path d="m14.09 10.95 1.41-1.41 1.41 1.41 1.06-1.06-1.41-1.42 1.41-1.41L16.91 6 15.5 7.41 14.09 6l-1.06 1.06 1.41 1.41-1.41 1.42 1.06 1.06Z"></path>
</svg>React Calculator</div>
            <Display output={input}/>
            <Keypad handleClick={handleClick}/>
        </div>
    )
}

export default Calculator;