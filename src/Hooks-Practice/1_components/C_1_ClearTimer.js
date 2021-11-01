
import React, {useState, useEffect, Component} from 'react'

export const ClearIntervalHook = () => {
    const [count, setCount] = useState(0)

    // const tick = () => {
    //     setCount(count+1)
    // }

    // or without dependecy ( [] )-- we can write it as

    const tick = () => {
        setCount(prevCount => prevCount+1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)

        return() => {
            clearInterval(interval)
        }
    }) // -- use [count] -- always think before specifying an empty dependency array

    return(
        <div>
            {count}
        </div>
    )
}


// Watch video once --- 



class ClearIntervalHook1 extends Component {
    state = {count: 0}

    componentDidMount() {
        console.log("Mount")
        this.timerId = setInterval(this.tick, 1000)
    }


    // componentWillUnmount() {
    //     console.log('Com Unmount')
    //     clearInterval(this.timerId)
    // }

    tick = () => {
        this.setState({count: this.state.count + 1})

        if (this.state.count >= 10) {
            clearInterval(this.timerId)
        }
    }

    render() {
        return <> {this.state.count} </> 
  
    }
}

export default ClearIntervalHook1