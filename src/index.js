import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer';
import NavBar from './components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <NavBar/>,
    <App />,
    <Footer/>,
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
