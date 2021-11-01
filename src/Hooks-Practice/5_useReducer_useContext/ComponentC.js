import React, {useContext} from 'react'
import { CountContext } from '../../App'


function ComponentC() {
    const countContext = useContext(CountContext)
    return (
    <div> 
        Component C

        <button onClick={()=>countContext.countDispatch('increment')}> Increment </button>
        <button onClick={()=> countContext.countDispatch('decrement')}> Decrement </button>
        <button onClick={() => countContext.countDispatch('reset')}> Reset </button>

    </div>
    )
}
export default ComponentC


// What and Why ? --
    // When there are nested components -- When we want to pass a prop to only a few components (without passing to an intermediate or parent components)
    // It provides a way to pass data through the component tree without having a pass props down manually at every level.


// Watch video -- 3 steps involved in context
// 1.  firtsly create context    2. Consume the context value using render props pattern




// import React, {useContext} from 'react'
// // import ComponentF from './A_2_ComponentF' --- can create many functions and use in them or pass through them
// import { UserContext,ChannelContext } from '../App'
                
// function ComponentE() {
                
//     const user = useContext(UserContext)
//     const channel = useContext(ChannelContext)
                
//     return(
//         <div>
//             {/* <ComponentF/> */}
//             {user} - {channel}
//         </div>
//     )
// }
                
// export default ComponentE



/* useReducer --- Local State Manangement
share state between components --- Global State Manangement

useReducer + useContext */