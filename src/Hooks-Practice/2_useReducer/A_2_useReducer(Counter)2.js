import React, {useReducer} from 'react'

// type -------- property -- which is a string

// Advantages of using as an object --- 
        // 1. We can add or decrement any value ( extra data can be passed and can be done easily )
        // 2. State as an Object -- can add in initialState - .spread opeartor etc .,. -- See the video (or pic )



const initialState = {firstCounter: 0, secoundCounter: 10}  // simple string action into an object action 
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value}  // return newState Object
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value}
        case 'increment2':
            return { ...state, secoundCounter: state.secoundCounter + action.value}  // return newState Object
        case 'decrement2':
            return { ...state, secoundCounter: state.secoundCounter - action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

function UseReducerCounter2() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return(
        <div>
            <div> FirstCount - {count.firstCounter} </div>
            <div> SecondCount - {count.secoundCounter} </div>

            <button onClick={()=>dispatch({type: 'increment', value: 1})}> Increment </button>
            <button onClick={()=> dispatch({type: 'decrement', value: 1})}> Decrement </button>
            <button onClick={() => dispatch({type: 'reset'})}> Reset </button>

            <button onClick={()=>dispatch({type: 'increment', value: 5})}> Increment 5 </button>
            <button onClick={()=> dispatch({type: 'decrement', value: 5})}> Decrement 5 </button>

            <button onClick={()=>dispatch({type: 'increment2', value: 1})}> Increment Second Counter</button>
            <button onClick={()=> dispatch({type: 'decrement2', value: 1})}> Decrement Second Counter </button>
        </div>
    )
}
export default UseReducerCounter2


// We can maintain both state and action as objects 
// Action as an object --- able to pass additional date to reducer function
// State as an object ---- able to keep track of multiple state variables ( Suited when dealing with Global State )