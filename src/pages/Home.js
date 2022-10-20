import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Soham Kayal</h2>
        <div className="prompt">
          <p>A full stack developer, competitive programmer and a passionate open source contributor</p>
         <a href="https://www.linkedin.com/in/soham-kayal-90939720b/" style={{'text-decoration-lines':'none'}}><LinkedInIcon /></a>
          <a href="mailto:kayalsoham61@gmail.com"><EmailIcon /></a>
          <a href="https://github.com/SohamKyal4103"><GithubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, ExpressJS, 
              MySQL, MongoDB,  DigitalOcean, AWS S3, 
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;