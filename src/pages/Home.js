import "../App.css"
import Hero from "../Components/Hero"
import Cards from "../Components/Cards"
import About from "./About"


function Home() {
  return (
    <>
      <Hero/>
      <About />
      <Cards/>
    </>
  )
}

export default Home;