import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Header from './Header'
import { Container } from 'reactstrap'
import PostArchive from '../View/posts/PostArchive';
import Navbar from './Navbar'
import Footer from './Footer'
import Home from '../View/Home/Home'
import Contact from '../View/ContactUs/Contact'
import AboutUs from '../View/aboutUS/AboutUs'
function Index() {

    return (
        <Router>
            <Header />
            <Container>
                <Navbar />
                <Switch>
                    <Route path="/about">
                        <AboutUs />
                    </Route>
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
