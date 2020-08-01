import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Header from './Header'
import { Container } from 'reactstrap'
import PostArchive from '../View/PostArchive';
import Navbar from './Navbar'
import Footer from './Footer'
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
                    <Route path="/users">
                    </Route>
                    <Route path="/">
                    </Route>
                </Switch>
            </Container>
            <Footer />
        </Router>
    )
}

export default Index
