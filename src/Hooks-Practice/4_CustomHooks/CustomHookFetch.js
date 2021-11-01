import React from 'react'
import useCustomFetch from './useFetch'

export default function CustomHookFetch() {

    const data = useCustomFetch('https://jsonplaceholder.typicode.com/users')

    const todos = useCustomFetch('https://jsonplaceholder.typicode.com/todos')

    return (
        <div>
            <p> Users </p> <br/>
            <div>
                {data.map(user => <p key={user.name}> {user.name} </p>)}
            </div> <br/>

            <p> Todos </p> <br/>
            <div>
                {todos.map(todo => <p key={todo.title}> {todo.title} </p>)}
            </div>
        </div>
    )
}
