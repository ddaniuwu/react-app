import './App.css';
import {BrowserRouter, Route , Switch} from 'react-router-dom';
import Badges from './components/Badges';
import Card from './components/Card';
import Notfound from './components/Notfound';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={phone} alt="My phone image"/>
      </header> */}

    <BrowserRouter>
    <Switch>
    <Route exact path="/index" component={Card}/>
    <Route exact path="/index/Badges" component={Badges}/>
    <Route path="/404" component ={Notfound}/>
    </Switch>
    </BrowserRouter>
    </div>

  );
}
export default App;
