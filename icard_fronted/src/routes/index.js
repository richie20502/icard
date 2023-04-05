import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export default function index() {
  return (
    <Router>
        <Switch>
            <h2>... Navigacion </h2>
        </Switch>
    </Router>
  )
}
