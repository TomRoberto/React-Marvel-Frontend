import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Personnages from "./containers/Personnages";
import Comics from "./containers/Comics";
import Favoris from "./containers/Favoris";
import Personnage from "./containers/Personnage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/personnage/:id">
            <Personnage />
          </Route>
          <Route path="/comics">
            <Comics />
          </Route>
          <Route path="/favoris">
            <Favoris />
          </Route>
          <Route path="/">
            <Personnages />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
