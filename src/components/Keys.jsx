import React from 'react'
import { useCalcContext } from '../content/contextCalc'
import '../static/Keys.css'
const Keys = () => {
  const { clickHandler, val, clear, output, backSpace } = useCalcContext()
  return (
    <div>
      <div className="keypad">
       <button className='keys clear' onClick={clear} type='button'>Clear</button>
       <button className='keys ' onClick={backSpace} type='button'>C</button>
       <button name={val? ')' : '('} onClick={clickHandler} className='keys highlight' type='button'>()</button>
       <button name='%' onClick={clickHandler} className='keys highlight' type='button'>%</button>
       <button name='/' onClick={clickHandler} className='keys highlight' type='button'>/</button>
       <button name='7' onClick={clickHandler} className='keys' type='button'>7</button>
       <button name='8' onClick={clickHandler} className='keys' type='button'>8</button>
       <button name='9' onClick={clickHandler} className='keys' type='button'>9</button>
       <button name='*' onClick={clickHandler} className='keys highlight' type='button'>*</button>
       <button name='4' onClick={clickHandler} className='keys ' type='button'>4</button>
       <button name='5' onClick={clickHandler} className='keys' type='button'>5</button>
       <button name='6' onClick={clickHandler} className='keys' type='button'>6</button>
       <button name='-' onClick={clickHandler} className='keys highlight' type='button'>-</button>
       <button name='1' onClick={clickHandler} className='keys ' type='button'>1</button>
       <button name='2' onClick={clickHandler} className='keys' type='button'>2</button>
       <button name='3' onClick={clickHandler} className='keys' type='button'>3</button>
       <button name='+' onClick={clickHandler} className='keys highlight' type='button'>+</button>
       <button name='0' onClick={clickHandler} className='keys ' type='button'>0</button>
       <button name='.' onClick={clickHandler} className='keys ' type='button'>.</button>
       <button onClick={output} className='keys bluelight' type='button'>=</button>
   </div>

    </div>
  )
}

export default Keys
