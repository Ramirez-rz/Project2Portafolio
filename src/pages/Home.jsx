import React from "react";
import "./Home.css";
import miles from "./Miles.webp";

function Home() {
  return (
    
    <div className="container">
      <div className="left-container">
          <h1 className="title">WEB PORTAFOLIO</h1>
          <div className="main-card">
            <h1 className="title">Andres Ramirez Ruiz</h1>
              <p className="subtitle">
                Software Engineering student with a strong interest in front end development and project development, enjoys building digital experiences from start to finish, focused on creating clean and user focused interfaces, interested in planning, structure and clear documentation, combining creativity and organization to deliver solutions that are well built and easy to understand.
              </p> 
          </div>
       

        <div className="cardContainer">
          
          <div className="card">
            <h3>Skills</h3>
            <p className="skills">Programming Languages C++, Python, MARIE Assembly Language, MATLAB
                Web Technologies HTML, CSS, JavaScript
                Frameworks & Runtime React, Node.js
                Tools Git, GitHub
                Core Areas Object-Oriented Programming, Data Structures, Algorithms, Databases, Soft-
                ware Development, Problem Solving
                Soft Skills Team Coordination, Communication, Leadership, Task Planning, Critical
                Thinking
                Languages Spanish (Native) / English (B2)
            </p>
          </div>

          <div className="card">
            <h3>Projects</h3>
            <p>Check out some of the work I've done:</p>
          </div>

        
        </div>
      </div>
      <div className="second-container">
        <img src={miles} />
      </div>
      
    </div>
  );
}

export default Home;;