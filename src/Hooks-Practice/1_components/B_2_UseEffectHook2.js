import {useEffect, useState, Component } from "react";

class UseEffectHook1 extends Component{
    state = {count: 0, name: ''}
    componentDidMount() {
        document.title = `Clicked ${this.state.count} times `
    }
    componentDidUpdate(prevProps, prevState) {
            
        if (prevState.count !== this.state.count){
            console.log("Updating Doc Title")
            document.title = `Clicked ${this.state.count} times`
        }
    }
    render(){
        return(
            <div>
                <input type='text' value = {this.state.name} onChange={e => {this.setState({name: e.target.value})}} />
                <button onClick={() => this.setState({count: this.state.count + 1})}> Click {this.state.count} </button>
            </div>
        )
    }
}
export default UseEffectHook1

// update the componentMount and update phase with -- Effect Hook





// Just like useState -- useEffect is also a function -- directly use it

export const UseEffectHook2 = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // we pass a function as an parameter -- it is get executed(runs) after every render of the component
    // useEffect is placed inside the component -- can easily access the component state and props

    useEffect(() => {
        console.log("Updating Doc Title")
        document.title = `You Clicked ${count} times`
    }, [count])

    // In order to conditionally render an effect -- specify the second parameter (is the array of value that the effect depends on ) to useEffect -- 

    return(
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => setCount(count+1)}> Click {count} times </button>
        </div>
    )
}