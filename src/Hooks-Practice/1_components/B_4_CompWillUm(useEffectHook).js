import React, {useState} from 'react'
import HookMouse from './B_3_HookMouse'

function UnMountCase() {
    const [display, setDisplay] = useState(true)

    return(
        <div>
            <button onClick={() => setDisplay( !display ) }> Toggle Button</button>
            { display && <HookMouse/>}
            

            {/* // Displays Warning - cleanup fun */}
        </div>
    )
}

export default UnMountCase