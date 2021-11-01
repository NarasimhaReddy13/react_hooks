import React, {useState, useEffect} from 'react'
import axios from 'axios'


function DataFetchingSinglePostButton() {

    const [post, setPost] = useState({}) // Object, not Arrow
    const [id, setId] = useState(1)
    const [idFromButttonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButttonClick}`)   // {id}
        .then(response => {
            console.log(response)
            setPost(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [idFromButttonClick])

    return(
        <div>
            <input type='text' value = {id} onChange={e => setId(e.target.value)}/>
            <button type='button' onClick={handleClick}> Fetch Post </button>
            <div> 
                {post.title} 
                {/* <ul>
                    {post.map(post => (<li key={post.id}> {post.title} </li>))}
                </ul> */}
            </div>
        </div>
    )
}
export default DataFetchingSinglePostButton