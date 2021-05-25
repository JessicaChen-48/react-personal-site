import "../App.css"
import Hero from "../Components/Hero"
import Cards from "../Components/Projects"
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