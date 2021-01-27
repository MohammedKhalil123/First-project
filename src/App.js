import Navigation from './components/Navigation/Navigation'
import { Route } from "react-router-dom";
import Calculator from './containers/Calculator/Calculator';
import TicTacToe from './containers/TicTacToe/TicTacToe';
import Bin2Dec from './containers/Bin2Dec/Bin2Dec'
import './App.css';
import Countries from './containers/Countries/Countries'
import Home from './containers/Home/Home'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route path='/Calculator'  exact component={Calculator}/>
      <Route path='/Tic-tac-toe'  exact component={TicTacToe}/>
      <Route path='/Bin2Dec'  exact component={Bin2Dec}/>
      <Route path='/Countries'  exact component={Countries}/>
      <Route path='/'  exact component={Home}/>
    </div>
  );
}

export default App;
