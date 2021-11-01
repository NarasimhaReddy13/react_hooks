import React, {useEffect, useRef, useState} from "react"

function UseRef() {
    const inputRef = useRef(null)

    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        // focus function -- for focussing the input
        inputRef.current.focus()
    }, []) // empty because as we want to focus only once when page reloaded

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return(
        <div>
            <input ref={inputRef} />
            <div>
                Hook Timer - { timer }
                <button onClick={() => clearInterval(intervalRef.current)}> Clear Timer button </button>
            </div>
        </div>
    )
}

export default UseRef

// current ---- react will set the refs current property to DOM node.
// It can also be used ----- to store any mutable value
// The value persists through the re-render while also not causing any additional renders when it's value changes