import React from 'react'
import './styles/banner.css'
import img1 from './img/img1.jpg'
class Banner extends React.Component{
    render(){
        return(
            
            <div className="Banner">
                <div className="Banner-item">
                <figure>
                    <img src={img1} alt="Item de banner principal"/>
                </figure>
                </div>
                <div className="Banner-item">
                <figure>
                    <img src={img1}/>
                </figure>
                </div>
                <div className="Banner-item">
                <figure>
                    <img src={img1}/>
                </figure>
                </div>
            </div>
        )
    }
}
export default Banner;