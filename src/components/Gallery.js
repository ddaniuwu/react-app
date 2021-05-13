import React from 'react';
import './styles/card.css';
import item1 from '../item1.jpg';
import './styles/banner.css'

class Gallery extends React.Component{
    render(){
        return(
            <section>
                <div className="Gallery">
                <div className="Gallery-item">
                    <figure>
            <img src={item1} />
            <p>First item</p>
                    </figure>
                    <button>Buy me!</button>
                </div>
                <div className="Gallery-item">
                    <figure>
            <img src={item1} />
            <p>Second item</p>
                    </figure>
                    <button>Buy me!</button>
                </div>
                <div className="Gallery-item">
                <figure>
            <img src={item1}></img>
            <p>Third item</p>
                </figure>
                <button>Buy me!</button>
                </div>
                
                </div>
            </section>
        )
    }
}
export default Gallery;