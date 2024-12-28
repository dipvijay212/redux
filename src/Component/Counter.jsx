import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { AddtoCounter,SubtoCounter } from '../Redux/Counter/action'
function Counter() {


  const dispatch= useDispatch()
  const {counter} =useSelector((store)=>store.counter)
   

  return (
    <div>
       <h1>{counter}</h1>
       <button onClick={()=>{dispatch(SubtoCounter(1))}}>-</button>
       <button onClick={()=>{dispatch(AddtoCounter(1))}}>+</button>
    </div>
  )
}

export default Counter
