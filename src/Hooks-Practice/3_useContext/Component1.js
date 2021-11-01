import React from 'react'
import Component2 from './Component2'

export const UserContext = React.createContext()

export const ChannelContext = React.createContext()

export default function Component1() {
    return (
        <div>
            Component 1
            {/* <UserContext.Provider value={'Narasimha'}>
                <Component2/>
            </UserContext.Provider> */}

            <UserContext.Provider value={'Narasimha'}>
                <ChannelContext.Provider value={'Reddy'}>
                    <Component2/>
                </ChannelContext.Provider>
            </UserContext.Provider>


        </div>
    )
}


/* context provides a way to pass data through the component tree without having to pass props down manually at every level */

/* How to get data from component1 to component3 --
--components order is --- component3 is nested in component2 and component2 is nested in component1 */ 

/* 3 steps -- 
1. create a context  
2. we need to provide a context with a value and the provider must wrap children components for the value to be available 
3. Consume the context value --- export context value */