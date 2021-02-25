import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';



const Header = (props) =>{
    return (
        <header>
            <NavLink className="title" activeClassName="sss" to="/"><h1>{props.title ? props.title : "SG Info"}</h1></NavLink>
            <nav>
                <ul className="nav-list">
                    <li><NavLink className="link" to="/" exact>Home</NavLink></li>
                    <li><NavLink className="link" to="/bus" exact>Bus Info</NavLink></li>
                    <li><NavLink className="link" to="/buscodes" exact>Bus Codes</NavLink></li>
                    <li><NavLink className="link" to="/weather" exact>Weather Info</NavLink></li>
                    <li><NavLink className="link" to="/about" exact>About the app</NavLink></li>
                </ul>
                
            </nav>
        </header>
    )
}

export default Header;