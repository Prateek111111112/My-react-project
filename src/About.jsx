import { useState } from "react"
import React from "react"
import Button from "./Button"
import PropTypes from 'prop-types'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
function About(){
    const [number, setNumber] = useState(0)
    const increment = () => {
        setNumber(number + 1)
    }
        const decrement = () => {
        setNumber(number - 1)
    }
    return(

        <div>
            <p>Count:{number}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
export default About