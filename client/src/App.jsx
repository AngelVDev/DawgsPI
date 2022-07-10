import "./App.css";
import Creator from "./pages/Creator";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/create" component={Creator} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
