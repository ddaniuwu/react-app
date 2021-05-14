import React from "react";
import "./styles/card.css"
import "bootstrap/dist/css/bootstrap.css"
import { Link } from "react-router-dom";
import Banner from './Banner';

class Card extends React.Component{
    
    handleChange = e =>{
      console.log(e.target.value)
    }

    onSubmit = e =>{
        e.preventDefault();
        console.log(e.target.value)
    }
    
    render(){
       
        return(
            <section>
                <h1>Welcome to my Phone Store</h1>
            <div className="container-search-box">
                <form className="search-box" >
                    <div className="container-search-box-item">
                    <label>What are you looking for?</label>
                    </div>
                    <div className="container-search-box-item">
                    <input 
                    type="text" 
                    name="search"
                    onChange={this.handleChange}
                    >
                    </input>
                    </div>
                    <div>
                        <button>Enviar</button>
                    </div>
                </form>
                <Link to="/index/badges">
                <button className="button-buy">
                    Comprar un producto
                </button>
                </Link>
            </div>     
            <Banner/>
            </section>  
        )
    }
}
export default Card;