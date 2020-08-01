import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Header from './Header'
import { Container } from 'reactstrap'
import PostArchive from '../View/PostArchive';
import Navbar from './Navbar'
import Footer from './Footer'
import Home from '../View/Home'
import Contact from '../View/ContactUs/Contact'
function Index() {

    return (
        <Router>
            <Header />
            <Container>
                <Navbar />
                <Switch>
                    <Route path="/posts">
                        <PostArchive />
                    </Route>
                    <Route path="/contact">
                    <Contact/>
                    </Route>
                    <Route path="/">
                    <Home/>
                    </Route>
                </Switch>
            </Container>
            <Footer />
        </Router>
    )
}

export default Index
