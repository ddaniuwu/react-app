import React from 'react';
import './styles/badges.css';
import Gallery from './Gallery';
import {Link} from 'react-router-dom';
class Badges extends React.Component
{
render(){
    return(
        <div className="badges">
        <h1> Our products</h1>
        <Gallery />
        <Link to="/index">
                <button className="button-buy">
                    Back to Home!
                </button>
        </Link>
        </div>

    )
}
}
export default Badges;