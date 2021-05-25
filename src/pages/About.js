import "../App.css";
// import "./About.css";
import "./About1.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
    <a id="about-anchor"></a>
      <div className="about-container">
        <h1>ABOUT ME</h1>
        <div className="about-page-text">
          <p>
            My name is Jessica and I'm a full stack web developer. I mostly code
            things in <strong>Javascript</strong>. This includes backend
            frameworks like <strong>Node.js and Express</strong>, frontend
            frameworks like <strong>React</strong>, and testing libraries like{" "}
            <strong>Jest</strong>. I also know <strong>PostgreSQL</strong> for
            querying the database. I also work with{" "}
            <strong>Flask, SQL-Alchemy, and Jinja.</strong>
          </p>
          <br />
          <p>
            I love working with APIs, from building them to integrating them
            with my projects. I recently worked on the open source Numbers API.
            The most impactful undertaking I did for the Numbers API was
            building several <strong>GraphQL</strong> endpoints using the{" "}
            <strong>Apollo</strong> library. We sanitized and retrieved the data
            required for the endpoints using the existing data layer, which was
            a huge win!
          </p>
          {/* <br />
          <p>
            This site is mostly for me to upload and share all my creations
            directly to the world. Check out some of my projects{" "}
            <Link to="/projects">here!</Link>
          </p> */}
          <br />
          <p>
            Aside from coding, I also enjoy baking, biking, and playing the
            Nintento smash-hit game, Animal Crossing New Horizons.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
