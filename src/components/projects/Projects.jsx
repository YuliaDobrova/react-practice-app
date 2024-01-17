import React from 'react';
import sprite from '../../images/sprite.svg';
import resume from '../../images/project-img-resume.png';
import wizwork from '../../images/project-img-wizwork.png';
import dental from '../../images/project-img-dental.png';
import movie from '../../images/project-img-movie.png';
import ball from '../../images/project-img-ball.png';
import boards from '../../images/project-img-boards.png';
import event from '../../images/project-img-event.png';
import icecream from '../../images/project-img-icecream.png';
import marsden from '../../images/project-img-marsden.png';
import './Projects.css';

const Projects = () => {
  return (
    <>
      <h1 className="project-title">My Projects</h1>
      <div className="project-cards">
        {/* RESUME */}
        <div className="project-card">
          <div className="project-card-disc">
            <h1>Resume</h1>
            <div>
              <a
                className="project-link"
                href="https://yuliadobrova.github.io/my-resume/"
                target="_black"
                rel="noopener noreferrer"
              >
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-link'}></use>
                </svg>
                <br />
                <span className="project-link-text">Link to the Project</span>
              </a>
              <a
                className="project-link"
                href="https://github.com/YuliaDobrova/my-resume"
                target="_black"
                rel="noopener noreferrer"
              >
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-github'}></use>
                </svg>
                <br />
                <span className="project-link-text">Link to the Code</span>
              </a>
            </div>
          </div>
          <img src={resume} alt="resume" />
        </div>

        {/* DENTIST */}
        <div className="project-card">
          <div className="project-card-disc">
            <h1>Dental Center</h1>
            <div>
              <a
                className="project-link"
                href="https://dental-center-beige.vercel.app/"
                target="_black"
                rel="noopener noreferrer"
              >
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-link'}></use>
                </svg>
                <br />
                <span className="project-link-text">Link to the Project</span>
              </a>
              <a
                className="project-link"
                href="https://github.com/YuliaDobrova/dental-center"
                target="_black"
                rel="noopener noreferrer"
              >
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-github'}></use>
                </svg>
                <br />
                <span className="project-link-text">Link to the Code</span>
              </a>
            </div>
          </div>
          <img src={dental} alt="dental" />
        </div>

        {/* WIZWORK */}
        <div className="project-card">
          <div className="project-card-disc">
            <h1>Social Network</h1>
            <div>
              <a
                className="project-link"
                href="https://www.wizwork.net/"
                target="_black"
                rel="noopener noreferrer"
              >
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-link'}></use>
                </svg>
                <br />
                <span className="project-link-text">Link to the Project</span>
              </a>
              <span href="" className="project-link">
                <span className="project-link-text nolink">
                  Link to the Code
                </span>
                <span className="project-link-text nolink">
                  cannot be shared
                </span>
              </span>
            </div>
          </div>
          <img src={wizwork} alt="wizwork" />
        </div>

        {/* SCOTT */}
        <div className="project-card">
          <div className="project-card-disc">
            <h1>Personal Website</h1>
            <div>
              <a
                className="project-link"
                href="http://scott-marsden.netlify.app"
                target="_black"
                rel="noopener noreferrer"
              >
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-link'}></use>
                </svg>
                <br />
                <span className="project-link-text">Link to the Project</span>
              </a>
              <a
                className="project-link"
                href="https://github.com/YuliaDobrova/marsden-website"
                target="_black"
                rel="noopener noreferrer"
              >
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-github'}></use>
                </svg>
                <br />
                <span className="project-link-text">Link to the Code</span>
              </a>
            </div>
          </div>
          <img src={marsden} alt="marsden" />
        </div>

        {/* MOVIE */}
        <div className="project-card">
          <div className="project-card-disc">
            <h1>Movie Finder</h1>
            <div>
              <a
                className="project-link"
                href="https://dobrova-yulia-movie.netlify.app/"
                target="_black"
                rel="noopener noreferrer"
              >
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-link'}></use>
                </svg>
                <br />
                <span className="project-link-text">Link to the Project</span>
              </a>
              <a
                className="project-link"
                href="https://github.com/YuliaDobrova/movie-search-app"
                target="_black"
                rel="noopener noreferrer"
              >
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-github'}></use>
                </svg>
                <br />
                <span className="project-link-text">Link to the Code</span>
              </a>
            </div>
          </div>
          <img src={movie} alt="movie" />
        </div>

        {/* EVENT BOOSTER */}
        <div className="project-card">
          <div className="project-card-disc">
            <h1>Event Booster</h1>
            <div>
              <a
                className="project-link"
                href="https://yuliadobrova.github.io/team-project-js/"
                target="_black"
                rel="noopener noreferrer"
              >
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-link'}></use>
                </svg>
                <br />
                <span className="project-link-text">Link to the Project</span>
              </a>
              <a
                className="project-link"
                href="https://github.com/YuliaDobrova/team-project-js"
                target="_black"
                rel="noopener noreferrer"
              >
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-github'}></use>
                </svg>
                <br />
                <span className="project-link-text">Link to the Code</span>
              </a>
            </div>
          </div>
          <img src={event} alt="event" />
        </div>

        {/* ICE CREAM */}
        <div className="project-card">
          <div className="project-card-disc">
            <h1>Ice Cream</h1>
            <div>
              <a
                className="project-link"
                href="https://yuliadobrova.github.io/team-project-html-css/"
                target="_black"
                rel="noopener noreferrer"
              >
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-link'}></use>
                </svg>
                <br />
                <span className="project-link-text">Link to the Project</span>
              </a>
              <a
                className="project-link"
                href="https://github.com/YuliaDobrova/team-project-html-css"
                target="_black"
                rel="noopener noreferrer"
              >
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-github'}></use>
                </svg>
                <br />
                <span className="project-link-text">Link to the Code</span>
              </a>
            </div>
          </div>
          <img src={icecream} alt="icecream" />
        </div>

        {/* MAGIC BALL */}
        <div className="project-card">
          <div className="project-card-disc">
            <h1>Magic Ball</h1>
            <div>
              <a
                className="project-link"
                href="https://fortune-magic-ball.netlify.app"
                target="_black"
                rel="noopener noreferrer"
              >
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-link'}></use>
                </svg>
                <br />
                <span className="project-link-text">Link to the Project</span>
              </a>
              <a
                className="project-link"
                href="https://github.com/YuliaDobrova/magic-ball"
                target="_black"
                rel="noopener noreferrer"
              >
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-github'}></use>
                </svg>
                <br />
                <span className="project-link-text">Link to the Code</span>
              </a>
            </div>
          </div>
          <img src={ball} alt="ball" />
        </div>

        {/* LIGHT BOARDS */}
        <div className="project-card">
          <div className="project-card-disc">
            <h1>Light Boards</h1>
            <div>
              <a
                className="project-link"
                href="https://magic-boards.netlify.app/"
                target="_black"
                rel="noopener noreferrer"
              >
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-link'}></use>
                </svg>
                <br />
                <span className="project-link-text">Link to the Project</span>
              </a>
              <a
                className="project-link"
                href="https://github.com/YuliaDobrova/magic-boards"
                target="_black"
                rel="noopener noreferrer"
              >
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-github'}></use>
                </svg>
                <br />
                <span className="project-link-text">Link to the Code</span>
              </a>
            </div>
          </div>
          <img src={boards} alt="boards" />
        </div>
      </div>
    </>
  );
};

export default Projects;
