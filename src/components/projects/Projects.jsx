import React from 'react';
import sprite from '../../images/sprite.svg';
import resume from '../../images/project-img-resume.png';
import wizwork from '../../images/project-img-wizwork.png';
import dental from '../../images/project-img-dental.png';
import movie from '../../images/project-img-movie.png';
import ball from '../../images/project-img-ball.png';
import boards from '../../images/project-img-boards.png';
import './Projects.css';

const Projects = () => {
  return (
    <>
      <h1 className="project-title">My Projects</h1>
      <div className="project-cards">
        {/* RESUME */}
        <div className="project-card card-1">
          <div className="project-card-disc">
            <h1>Resume</h1>
            <div>
              <a
                className="project-link"
                href="https://github.com/YuliaDobrova/my-resume"
                target="_black"
                rel="noopener noreferrer"
              >
                <span className="project-link-text">Link to the Project</span>
                <br />
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-link'}></use>
                </svg>
              </a>
              <a
                className="project-link"
                href="https://yuliadobrova.github.io/my-resume/"
                target="_black"
                rel="noopener noreferrer"
              >
                <span className="project-link-text">Link to the Code</span>
                <br />
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-github'}></use>
                </svg>
              </a>
            </div>
          </div>
          <img src={resume} alt="resume" />
        </div>

        {/* DENTIST */}
        <div className="project-card card-2">
          <div className="project-card-disc">
            <h1>Dentist</h1>
            <div>
              <a
                className="project-link"
                href="https://dental-center-beige.vercel.app/"
                target="_black"
                rel="noopener noreferrer"
              >
                <span className="project-link-text">Link to the Project</span>
                <br />
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-link'}></use>
                </svg>
              </a>
              <a
                className="project-link"
                href="https://github.com/YuliaDobrova/dental-center"
                target="_black"
                rel="noopener noreferrer"
              >
                <span className="project-link-text">Link to the Code</span>
                <br />
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-github'}></use>
                </svg>
              </a>
            </div>
          </div>
          <img src={dental} alt="dental" />
        </div>

        {/* WIZWORK */}
        <div className="project-card card-3">
          <div className="project-card-disc">
            <h1>Wizwork</h1>
            <div>
              <a
                className="project-link"
                href="https://www.wizwork.net/"
                target="_black"
                rel="noopener noreferrer"
              >
                <span className="project-link-text">Link to the Project</span>
                <br />
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-link'}></use>
                </svg>
              </a>
              <a href="" className="project-link">
                <span className="project-link-text">Link to the Code</span>
                <br />
                <span className="project-link-text">cannot be shared</span>
              </a>
            </div>
          </div>
          <img src={wizwork} alt="wizwork" />
        </div>

        {/* MOVIE */}
        <div className="project-card card-4">
          <div className="project-card-disc">
            <h1>Movie Finder</h1>
            <div>
              <a
                className="project-link"
                href="https://dobrova-yulia-movie.netlify.app/"
                target="_black"
                rel="noopener noreferrer"
              >
                <span className="project-link-text">Link to the Project</span>
                <br />
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-link'}></use>
                </svg>
              </a>
              <a
                className="project-link"
                href="https://github.com/YuliaDobrova/movie-search-app"
                target="_black"
                rel="noopener noreferrer"
              >
                <span className="project-link-text">Link to the Code</span>
                <br />
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-github'}></use>
                </svg>
              </a>
            </div>
          </div>
          <img src={movie} alt="movie" />
        </div>
        {/* MAGIC BALL */}
        <div className="project-card card-5">
          <div className="project-card-disc">
            <h1>Magic Ball</h1>
            <div>
              <a
                className="project-link"
                href="https://fortune-magic-ball.netlify.app"
                target="_black"
                rel="noopener noreferrer"
              >
                <span className="project-link-text">Link to the Project</span>
                <br />
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-link'}></use>
                </svg>
              </a>
              <a
                className="project-link"
                href="https://github.com/YuliaDobrova/magic-ball"
                target="_black"
                rel="noopener noreferrer"
              >
                <span className="project-link-text">Link to the Code</span>
                <br />
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-github'}></use>
                </svg>
              </a>
            </div>
          </div>
          <img src={ball} alt="ball" />
        </div>
        {/* LIGHT BOARDS */}
        <div className="project-card card-6">
          <div className="project-card-disc">
            <h1>Light Boards</h1>
            <div>
              <a
                className="project-link"
                href="https://magic-boards.netlify.app/"
                target="_black"
                rel="noopener noreferrer"
              >
                <span className="project-link-text">Link to the Project</span>
                <br />
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-link'}></use>
                </svg>
              </a>
              <a
                className="project-link"
                href="https://github.com/YuliaDobrova/magic-boards"
                target="_black"
                rel="noopener noreferrer"
              >
                <span className="project-link-text">Link to the Code</span>
                <br />
                <svg className="project-icon" width="30" height="30">
                  <use href={sprite + '#icon-github'}></use>
                </svg>
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
