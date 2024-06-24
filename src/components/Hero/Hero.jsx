import React from "react";
import "./Hero.css"; // Assuming this is your corresponding CSS file
import myImage from "../../assets/images/my-image.png";
import bgVideo from "../../assets/images/bg-video.mp4";

function Hero() {
  return (
    <section className="heroSec">
      <div className="hero" id="hero">
        <video autoPlay muted loop className="video-background">
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="content">
          <div className="left">
            <div className="name">
              <h1>RAJAN</h1>
            </div>
            <div className="tag">
              <h3>Web Developer</h3>
            </div>
            <div className="sub-tag">
              <i>& I love coding.</i>
            </div>
            <a href="./assets/Resume 24_Rajan_Sapkota.docx" download>
              <button className="cv-btn">
                Download CV
                <i className="fa-solid fa-download"></i>
              </button>
            </a>
          </div>
          <div className="right">
            <img src={myImage} alt="my photo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
