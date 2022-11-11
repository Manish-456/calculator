import React from 'react'
import '../static/Calc.css'
import { useCalcContext } from '../content/contextCalc'
const Calc = () => {
 const { val } = useCalcContext()
  return (
    <div>
      <div className='mirror'></div>
    <input type="text" value={val} className='Screen'/>
    </div>
  )
}

export default Calc
