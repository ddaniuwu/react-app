import React from 'react';
import './styles/navbar.css';
import logo from '../logo.png';

class NavBar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <div className="item1">
                <a href="/">
                <img src={logo} alt ="Logo MAC"/>
                </a>
                </div>
                <div className="item2">
                    <h1>TechnologyStore</h1>
                </div>
            </div>
        )
    }
}
export default NavBar;