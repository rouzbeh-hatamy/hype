import React from 'react'
import { Router } from 'react-router-dom'
import Header from './Header'
function index() {
    return (
        <Router>
            <Header/>
            <Footer/>
        </Router>
    )
}

export default index
