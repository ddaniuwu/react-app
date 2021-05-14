import React from 'react';
import phone from '../phone.jpg';
import '../App.css';

class Header extends React.Component{
render () {
    return(
        <header className="App-header">
            <h1>404 NotFound</h1>
        <img src={phone} alt="My phone image"/>
      </header> 
    )
}
}
export default Header;