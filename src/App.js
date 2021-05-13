import phone from './phone.jpg'
import './App.css';
import {BrowserRouter, Route , Switch} from 'react-router-dom';
import Badges from './components/Badges';
import Card from './components/Card';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={phone} alt="My phone image"/>
        <h1>Welcome to my Phone Store</h1>
      </header>

    <BrowserRouter>
    <Switch>
    <Route exact path="/index" component={Card}/>
    <Route exact path="/index/Badges" component={Badges}/>
    </Switch>
    </BrowserRouter>
    </div>

  );
}
export default App;
