import "../App.css";
import "./About.css"
import PageInfo from "../Components/PageInfo";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-page-text">
          <h1>ABOUT ME</h1>
          <p>
            My name is Jessica and I'm a full stack web developer. My coding
            journey actually started when I was a wee lass using HTML to build
            my Neopets pet page. When I was laid off from my job in summer 2020,
            I decided to learn more about my childhood interest and make it into
            a career.
          </p>
          <br />
          <p>
            I mostly code things in Javascript. This includes
            backend frameworks like Node.js and Express, frontend frameworks
            like React, and testing libraries like Jest. I'm always learning new
            things, so check back later and this list might be longer! I'm
            currently teaching myself Cypress, a frontend testing library.
          </p>
          <br />
          <p>
            I love working with APIs, from building them to integrating them
            with my projects. I recently worked on the open source Numbers API.
            The most impactful undertaking I did for the Numbers API was
            building several GraphQL endpoints using the Apollo library. We
            sanitized and retrieved the data required for the endpoints using
            the existing data layer, which was a huge win!
          </p>
          <br />
          <div className="extra">
          <p>
            This site is mostly for me to upload and share all my creations
            directly to the world. Check out some of my projects here!
          </p>
          <br />
          <p>
            Aside from coding, I also enjoy baking, biking, and playing the
            Nintento smash-hit game, Animal Crossing New Horizons.
          </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
