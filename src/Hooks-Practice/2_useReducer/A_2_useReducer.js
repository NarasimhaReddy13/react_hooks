// It is a used for state management --- (in this point it is similat to useState)
// Then difference ? -- useState is built using useReducer (more primitive)


// Learning Redux -- will make simple.

//          reduce       vs                usereducer

//      in JS                               in React
//  arr.reduce(reducer, initVal)            userReducer(reducer, initialSate)
//  singVal = reducer(acc, itemVal)         newState = reducer(currentState, action)
// reduce method returns a single val       useReducer returns a pair of values. [newState, dispatch] -- dispatch is a method (used to specify the action)



import React, {useReducer} from 'react'

// Simple action and State
const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function UseReducerCounter() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return(
        <div>
            <div> Count - {count} </div>
            <button onClick={()=>dispatch('increment')}> Increment </button>
            <button onClick={()=> dispatch('decrement')}> Decrement </button>
            <button onClick={() => dispatch('reset')}> Reset </button>
        </div>
    )
}

export default UseReducerCounter

/* Can use multiple useReducers hooks -- if we need two or more counters with exact same transitions , use Reducers */

/* const [countTwo, dispatchTwo] = useReducer(reducer, initialState)
copy paste the same code in return()  ---- these make use of same reducer function  */