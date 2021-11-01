// We can build our own hooks  -- by extracting component logic into reusuable functions
// It's a JS function -- whose name starts with 'use'

// custom hooks can also call other hooks 
// To share logic ( Alternative to HOC and Render Props )  --- instead of duplicating

import React from 'react'
import useCustomCounterHook from './3_customHook'

function CounterOne() {
    const [count, increment, decrement, reset] = useCustomCounterHook(0,1)

    return(
        <div>
            <h2> Count = {count} </h2>
            <button onClick={increment}> Increment </button>
            <button onClick={decrement}> Decrement </button>
            <button onClick={reset}> Reset </button>
        </div>
    )
}
export default CounterOne