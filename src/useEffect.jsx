import React from 'react'
import { useState, useEffect } from 'react'
import Button from './Button'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import PropTypes from 'prop-types'

const UseEffectComponent = () => {
    const [number, setNumber] = useState(0)
    const increment = () => {
        setNumber(number + 1)
    }
    const decrement = () => {
        setNumber(number - 1)
    }
    useEffect(() => {
        console.log("useEffect called")
    }, [number])
    useEffect(() => {
        console.log("use effect called only once on page load")
    }, [])

  return (
    <div>
        <p>Count:{number}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default UseEffectComponent