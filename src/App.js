import Navbar from "./Components/Navbar"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import './App.css';
import Home from "./Components/pages/Home"
import Products from "./Components/pages/Products"
import Services from "./Components/pages/Services"
import Signup from "./Components/pages/Signup"

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/projects" component={Products} />
        <Route exact path="/about" component={Services} />
        <Route exact path="/contact" component={Signup} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
