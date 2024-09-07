import React from "react";
import calculatorImg from "../../assets/projectImg/calculator.png";
import movieImg from "../../assets/projectImg/movie-search.png";
import todoImg from "../../assets/projectImg/notToDoList-Js.png";
import "./Portfolio.css";
// import bookStoreImg from "../../assets/projectImg/BookStore-React.png";
import githubImg from "../../assets/icons/github.png";
import quizImg from "../../assets/projectImg/QuizApp.png";
import userImg from "../../assets/projectImg/RandomUserAPI-JS.png";
import weatherImg from "../../assets/projectImg/weather.png";
import cryptoMate from '../../assets/projectImg/crypto-mate.png'
import carManagement from '../../assets/projectImg/car-management.png'

const Portfolio = () => {
  return (
    <div className="portfolio" id="projects">
      <h2 className="title">My Recent Projects</h2>
      <div className="project-container">
        <div className="project-card">
          <a
            href="https://auto-management.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="top">
              <img src={carManagement} />
            </div>
            <div className="bottom">
              <a
                href="https://github.com/thisisrajansapkota/auto-management"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icons">
                  <i className="fa-brands fa-github"></i>
                </div>
              </a>
              <p>Car Management System</p>
              <p>Angular, Typescript, Firebase</p>
            </div>
          </a>
        </div>

        <div className="project-card">
          <a
            href="https://movie-search-reactjs.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="top">
              <img src={movieImg} />
            </div>
            <div className="bottom">
              <a
                href="https://github.com/thisisrajansapkota/movie-search-reactjs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icons">
                  <i className="fa-brands fa-github"></i>
                </div>
              </a>
              <p>Movie Search</p>
              <p>ReactJs, API call</p>
            </div>
          </a>
        </div>

        <div className="project-card">
          <a
            href="https://weather-app-kohl-sigma-60.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="top">
              <img src={weatherImg} alt="Project" />
            </div>
            <div className="bottom">
              <a
                href="https://github.com/thisisrajansapkota/weather-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icons">
                  <i className="fa-brands fa-github"></i>
                </div>
              </a>
              <p>Weather App</p>
              <p>HTML, CSS, JavaScript</p>
            </div>
          </a>
        </div>

        <div className="project-card">
          <a
            href="https://not-to-do-list-js.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="top">
              <img src={todoImg} alt="Project" />
            </div>
            <div className="bottom">
              <a
                href="https://github.com/thisisrajansapkota/Not-ToDoList-Js"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icons">
                  <i className="fa-brands fa-github"></i>
                </div>
              </a>
              <p>Todo List</p>
              <p>HTML, CSS, JavaScript</p>
            </div>
          </a>
        </div>

        <div className="project-card">
          <a
            href="https://random-user-api-rouge.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="top">
              <img src={userImg} alt="Project" />
            </div>
            <div className="bottom">
              <a
                href="https://github.com/thisisrajansapkota/randomUserAPI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icons">
                  <i className="fa-brands fa-github"></i>
                </div>
              </a>
              <p>Random User Search</p>
              <p>JavaScript, API call</p>
            </div>
          </a>
        </div>

        <div className="project-card">
          <a
            href="https://crypto-market-black.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="top">
              <img src={cryptoMate} />
            </div>
            <div className="bottom">
              <a
                href="https://github.com/thisisrajansapkota/crypto-market"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icons">
                  <i className="fa-brands fa-github"></i>
                </div>
              </a>
              <p>CryptoMate</p>
              <p>React JS, Coingecko API</p>
            </div>
          </a>
        </div>

        {/* project container div closes below */}
      </div>

      <br />
      <br />
      <div className="plain-text" style={{ textAlign: "center" }}>
        <h3>
          <p>
            You can find more of my projects on my Github.
            <a
              href="https://github.com/thisisrajansapkota"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubImg} alt="github Icon" />
              {/* <i className="fa-brands fa-github" id="socials-icon"></i> */}
            </a>
          </p>
        </h3>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Portfolio;
