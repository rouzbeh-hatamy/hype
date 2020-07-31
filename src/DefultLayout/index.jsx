import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import PostArchive from '../View/PostArchive';
function index() {
    return (
        <Router>
               <Header/>
                <Switch>
                    <Route path="/posts">
                        <PostArchive />
                    </Route>
                    <Route path="/users">
                    </Route>
                    <Route path="/">
                    </Route>
                </Switch>
        </Router>        
    )
}

export default index
