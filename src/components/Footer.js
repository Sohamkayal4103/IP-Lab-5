import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.linkedin.com/in/soham-kayal-90939720b/" style={{'text-decoration-lines':'none'}}><LinkedInIcon /></a>
          <a href="https://twitter.com/kayal_soham"><TwitterIcon /></a>
          <a href="https://github.com/Sohamkayal4103"><GithubIcon /></a>
      </div>
      <p> &copy; 2022 Soham Kayal</p>
    </div>
  );
}

export default Footer;