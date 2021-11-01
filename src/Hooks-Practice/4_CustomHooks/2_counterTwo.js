import React from 'react'
import useCustomCounterHook from './3_customHook'
import useCustomHookInput from './4_customHookInput'

function CounterTwo() {
    const [count, increment, decrement, reset] = useCustomCounterHook(10,4)


    const [firstName, bindFirstName, resetFirstName] = useCustomHookInput('')
    const [lastName, bindLastName, resetLastName] = useCustomHookInput('')

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)

        resetFirstName()
        resetLastName()
    }

    return(
        <div>
            <div>
                <h2> Count = {count} </h2>
                <button onClick={increment}> Increment </button>
                <button onClick={decrement}> Decrement </button>
                <button onClick={reset}> Reset </button>
            </div>


            <form onSubmit={submitHandler}>
                <div>
                    First Name <input {...bindFirstName} placeholder='First Name' /> 
                    Second Name <input {...bindLastName} placeholder='Last Name'/> 
                </div>
                <button> Submit </button>
            </form>
        </div>
    )
}
export default CounterTwo