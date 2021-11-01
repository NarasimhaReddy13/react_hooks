import React, {useReducer, useEffect} from "react"
import axios from "axios"

const initialSate = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                post: {},
                error: 'Wrong !'
            }
        default:
            return state
    }
}

function DataFetchUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialSate)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/2')
        .then(response => {
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})
        })
        .catch(error => {
            dispatch({type: 'FETCH_ERROR', error: 'Went Wrong' + error.toString()})
        })
    }, [])

    return(
        <div>
            {state.loading ? 'Loading': state.post.title}
            {state.error ? state.error: null}
        </div>
    )
}
export default DataFetchUseReducer


// useReducer -- Local state management
// Share state b/w components -- Global state management by (useReducer + useContext)


// When there is a deep nested components within the component tree - Passing props is very difficult --- useContext Hook will solve this problem