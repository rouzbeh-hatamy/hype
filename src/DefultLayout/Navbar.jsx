import React, { useState } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";



function Navbaar(props) {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (

        <Nav fill tabs className="navbaar" >
            <NavItem>
                <Link to="/">
                    <NavLink className={activeTab === '1' ? 'active' : ''}
                        onClick={() => { toggle('1'); }} >Home</NavLink>
                        </Link>
            </NavItem>
            <NavItem>
            <Link to="/posts"><NavLink className={activeTab === '2' ? 'active' : ''}
                    onClick={() => { toggle('2'); }}>Blog</NavLink></Link>
            </NavItem>
            <NavItem>
            <Link to="/about"><NavLink className={activeTab === '3' ? 'active' : ''}
                    onClick={() => { toggle('3'); }}>About US</NavLink></Link>
            </NavItem>
            <NavItem>
            <Link to="/contact"><NavLink className={activeTab === '4' ? 'active' : ''}
                    onClick={() => { toggle('4'); }}>Contact US</NavLink></Link>
            </NavItem>
        </Nav>
    )
}

export default Navbaar;
