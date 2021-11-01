
import React, {useState, useEffect} from 'react'


function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        console.log("Mouse Effect")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("useEffect Called")
        window.addEventListener('mousemove', logMousePosition)

        // to remove warning in the console --- in this we return a cleanup fun similar lo unMount
        return() => {
            console.log("Component Unmount")
            window.removeEventListener('mousemove', logMousePosition)
        }
        // we include it -- for cancelling subscriptions , timers, removing event handlers
    }, [])

    return(
        <div>
            Hooks X - {x} and Y - {y}
        </div>
    )
}

export default HookMouse