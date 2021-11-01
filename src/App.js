import React from 'react'

import HomeScreen from './ShoppingCart-ContextAPI/HomeScreen'
import Nav from './Components/Nav'
import Cart from './Components/Cart'

export default function App() {
    return (
        <div className="App">
            <Nav />
            <Cart />
            <HomeScreen />
        </div>
    )
}


// npx create-react-app -      (simple - will give the name same as folder name )