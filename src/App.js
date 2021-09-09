import './App.css';
import MenuLateral from './Components/MenuLateral';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import ScrapEngine from './Components/ScrapEngine';
import Parametros from './Components/Parametros';
import Login from './Components/Login';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/scrap-engine" exact>
            <MenuLateral/>
            <ScrapEngine title={"Engine - Gerador de busca"}/>
          </Route>
          <Route path="/parametros" exact >
            <MenuLateral/>
            <Parametros/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
