import React from 'react';
import './styles/footer.css';

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <section>
                <div className="footer">
                    <div className="item">
                        <a href="#"><h3>Contact</h3></a>
                    </div>
                    <div className="item">
                    <a href="#"><h3>About</h3></a>
                    </div>
                    <div className="item">
                    <a href="#"><h3>OnSale</h3></a>
                    </div>
                </div>
                </section>
            </footer>
        )
    }
}
export default Footer;