import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React from 'react'

function Login() {
  return (
    <div className="app">
        <Route exact path='/' component={Login} />
    </div>
  )
}

export default Login