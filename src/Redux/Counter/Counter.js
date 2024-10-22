import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment, Reset } from '../Actions/Action';
import "bootstrap/dist/css/bootstrap.min.css";

function Counter() {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Counter : <span className='text-success'>{count}</span></h1>
      <div className='m-5'>
        <button className='btn btn-primary me-3' onClick={() => dispatch(Increment())}>+</button>
        <button className='btn btn-secondary' onClick={() => dispatch(Decrement())}>-</button>
      </div>
      <button className='btn btn-danger' onClick={() => dispatch(Reset())}>Reset</button>
    </div>
  );
}

export default Counter
