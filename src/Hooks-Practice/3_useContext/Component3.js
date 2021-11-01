import React, {useContext} from 'react'
import { UserContext, ChannelContext } from './Component1'

export default function Component3() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            Component 3
            <UserContext.Consumer>
                {user => {
                    return (
                    <ChannelContext.Consumer>
                        {channel => {
                            return ( <div> User Context { user } , Channel Context {channel} </div> )
                        }}
                    </ChannelContext.Consumer>)
                }}
            </UserContext.Consumer>

            {/* It will be ok when we making use of one context ---
            let's create a channel context in the main component1 and verify  --- it's becoming ugly */}


            {/* There is a short way  */}

            {/* useContext Hook ---- makes it simpler
            Using this -- first 2 steps remains same ---- 3. import useContext , import necessory context */}


            {user}-{channel}

        </div>
    )
}

/* use render props pattern to hold the value */

