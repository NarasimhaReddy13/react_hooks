// Object as a state variable with the useState hook

import React, {useState} from 'react'

function ObjectHook() {

    // imp -- a state variable can be a num, boolean, string, object or array 

    const [name, setName] = useState({firstName: '', lastName: ''})

    return(
        <div>
            <form>
                <input type='text' value={name.firstName} onChange={(e) => setName({...name, firstName: e.target.value})} />
                <input type='text' value={name.lastName} onChange={(e) => setName({...name, lastName: e.target.value})} />

                <p> Your First Name is : {name.firstName} </p>
                <p> Your Last Name is : {name.lastName} </p>

                <h2> {JSON.stringify(name)}</h2>

                <button type='submit'> Submit </button>
            </form>
        </div>
    )
}

export default ObjectHook

// setState() - will merge the state and update automatically , 
//  --->  but -- useState hook will not automatically merge the state ( using spread operator we can overcome this)