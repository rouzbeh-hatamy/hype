import React, { useState } from 'react'
import { Nav, NavItem } from 'reactstrap';
import { Link } from "react-router-dom";



function Navbaar(props) {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (

        <Nav fill tabs className="navbaar" >
            <NavItem>
                <Link to="/" className={`nav-link ${activeTab === '1' ? 'active' : ''}`} onClick={() => { toggle('1'); }} >
                         Home
                        </Link>
            </NavItem>
            <NavItem>
            <Link to="/posts" className={`nav-link ${activeTab === '2' ? 'active' : ''}`} onClick={() => { toggle('2'); }}>Blog</Link>
            </NavItem>
            <NavItem>
            <Link to="/about" className={`nav-link ${activeTab === '3' ? 'active' : ''}`} onClick={() => { toggle('3'); }}>About US</Link>
            </NavItem>
            <NavItem>
            <Link to="/contact" className={`nav-link ${activeTab === '4' ? 'active' : ''}`} onClick={() => { toggle('4'); }}>Contact US</Link>
            </NavItem>
        </Nav>
    )
}

export default Navbaar;
