import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'
import './Counter.css'
export function Counter() {
  const count = useSelector((state) => state.counter.count)
  const themeTextColor = useSelector((state) => state.theme.color)

  const dispatch = useDispatch()

  return (
    <div className="txt">
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          className="txt"
        >
          Increment
        </button>
        <span style={{ color: themeTextColor }}>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increment bY 10
        </button>


      </div>
    </div>
  )
}