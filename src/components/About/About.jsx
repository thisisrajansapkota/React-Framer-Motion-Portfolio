import React from "react";
import "./About.css"; // Assuming your SCSS file is named styles.scss
import croppedImage from '../../assets/images/cropped_image.png';

const AboutSection = () => {
  return (
    <section className="aboutSection" id="about">
      <section className="about-me">
        <h2 className="title">About me</h2>
        <div className="about-container">
          <div className="left">
            <img
              className="userImg2"
              src={croppedImage}
              alt="my-image"
              width="80%"
            />
          </div>
          <div className="right">
            <h2>Rajan Sapkota</h2>
            <p className="details">
              Hi, my name is Rajan Sapkota.
              <br />
              Experienced Web Developer with over 2 years of experience in
              Front-end Web development. Proficient in web technologies and UI
              design, with expertise in HTML, CSS, JavaScript and its libraries
              such as ReactJS. Known for attention to detail and excellent
              communication skills.
            </p>
            <div className="tag">
              <h2>Interests</h2>
            </div>
            <div className="interests">
              <span>Traveling</span>
              <span>Football</span>
              <span>Coding</span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutSection;
