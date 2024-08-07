import React from "react";
import bgVideo from "../../assets/images/bg-video.mp4";
import myImage from "../../assets/images/my-image.png";
import "./Hero.css";
import heroImg from "../../assets/images/mountainLight.jpg"; // Assuming this is your default hero image

function Hero({ darkMode }) {
  return (
    <section className="heroSec">
      <div className="hero" id="hero">
        {darkMode && (
          <video autoPlay muted loop playsInline className="video-background">
            <source src={bgVideo} type="video/mp4" />
          </video>
        )}

        {!darkMode && (
          <img
            src={heroImg}
            className="hero-background"
            alt="Hero Background"
          />
        )}

        <div className="content">
          <div className="left">
            <div className="name">
              <h1>RAJAN</h1>
            </div>
            <div className="tag">
              <h3>Web Developer</h3>
            </div>
            <div className="sub-tag">
              <br />
              <h4>
                <i style={{ color: "white", fontSize: "23px" }}>
                  & I love coding.
                </i>
              </h4>
            </div>
            {/* Uncomment and fix the download link */}
            {/* <a href="/public/RESUME_RAJAN.pdf" download>
              <button className="cv-btn">
                Download CV
                <i className="fa-solid fa-download"></i>
              </button>
            </a> */}
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
