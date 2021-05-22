import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import './App.css';
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer/>
    </BrowserRouter>

    </>
  );
}

export default App;
