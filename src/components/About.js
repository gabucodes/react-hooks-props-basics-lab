import React from "react";
import Links from "./Links"

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      
         {/* Show <p> only if bio exists and is not empty */}
         {bio && bio.trim() !== "" && <p>{bio}</p>}

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin} />
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;
