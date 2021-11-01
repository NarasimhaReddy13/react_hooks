import React, {useState} from 'react'

function ArrayHook() {

    const [items, setItems] = useState([])

    // setter function doesn't merge and update -- ( doen't automatically append values to the end )-- done by using spred operator
    const addItem = () => {
        setItems([...items, {id: items.length, value: Math.floor(Math.random()*10) + 1}])
    }

    return(
        <div>
            <button onClick={addItem}> Add a Number </button>
            <ul>
                {items.map(each => (<li key={each.id}> {each.value} </li>))}
            </ul>
        </div>
    )
}

export default ArrayHook