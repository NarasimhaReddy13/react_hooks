import React, {useState, useMemo} from 'react'

export default function UseMemoHook() {

    const [count, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const incrementTwo = () => {
        setCountTwo(countTwo + 2)
    }

    const isEven = useMemo(() => {
        return count % 2 === 0
    }, [count])


    return (
        <div>
            <button onClick={() => setCountOne((prev) => prev+1)}> Count One {count} </button>
            <span> {isEven ? 'Even': 'Odd'}  </span>
            <button onClick={incrementTwo}> Count Two {countTwo} </button>
        </div>
    )
}

// for longer or many statements in isEven will give slower performance --- so use useMemo()
// 1st argument -- function value whose return value needs to be cashed 
// 2nd parameter -- dependencies



// useCallback is similar to useMemo hook ---
/* useCallback -- cashes the provided function instance itself
   useMemo --- invokes the provided function and cashes it's result */
