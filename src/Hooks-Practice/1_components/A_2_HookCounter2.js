import React, {useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    function setTheCount() {
        setCount(prevState => prevState + 1)
    }

    const incrementFive = () => {
        for (let i=0; i<5; i++) {
            setCount(prevState => prevState + 1)
        }
    }

    return(
        <div>
            Count: {count}
            
            {/*<button onClick={() => setCount(count-1)}> Decrement </button>  --- use if not deepending on previous count*/}

            <button onClick={() => setCount(initialCount)}> Reset </button>
            <button onClick={setTheCount} > Increment </button>
            <button onClick={() => setCount(prevState => prevState - 1)} > Decrement </button>

            <button onClick={incrementFive}> Increment by 5</button>
        </div>
    )
}

export default HookCounterTwo

// The current implementation and what we done previously -- both are not safe.
// It is not the rigth way to change count --- it won't work in some cases --
// so when we are changing the state based on previous state, don't pass count as argument -- pass as a function