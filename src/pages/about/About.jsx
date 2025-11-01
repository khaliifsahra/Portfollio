import React from "react";
import "./About.css";

import profile_image2 from "..//../assets/Imgs/profile_image2.svg";
import pp from "../../assets/Imgs/pp.png";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={pp} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_image2} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill" style={{ "--level": "75%" }}>
              <p>HTML & CSS</p>
              <hr />
            </div>

            <div className="about-skill" style={{ "--level": "100%" }}>
              <p>React JS</p>
              <hr />
            </div>

            <div className="about-skill" style={{ "--level": "30%" }}>
              <p>JavaScript</p>
              <hr />
            </div>

            <div className="about-skill" style={{ "--level": "80%" }}>
              <p>Taiwand CSS</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div className="abou-achievements">
        <div className="abou-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="abou-achievement">
          <h1>50+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="abou-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
