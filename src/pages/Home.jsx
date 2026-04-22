import React from "react";
import "./Home.css";
import miles from "./Miles.webp";
import skills from "./skills.jpg";
import P1 from "./P1.png";
import P3 from "./P3.png";
import P5 from "./P5.png";

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
          <div className="card2">
            <h3>Projects</h3>
            <p>Check out some of the work I've done:</p>
            <div className="w-[800px] h-[200px] flex flex-nowrap gap-3">
                <div className="w-[200px] h-[200px] bg-white rounded-xl">
                  <a
                    href="https://github.com/Ramirez-rz/Proyecto1Calculadora" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img className="w-[100%] h-[100%] rounded-xl cursor-pointer" src={P1} />
                  </a>
                </div>
                <div className="w-[200px] h-[200px] bg-white rounded-xl">
                  <a
                    href="https://github.com/Ramirez-rz/Proyecto3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img className="w-[100%] h-[100%] rounded-xl cursor-pointer" src={P3} />
                  </a> 
                </div>
                <div className="w-[200px] h-[200px] bg-white rounded-xl">
                  <a
                    href="https://chatify-ui-chi.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img className="w-[100%] h-[100%] rounded-xl cursor-pointer" src={P5} />
                  </a>
                </div>
                <div className="w-[200px] h-[200px] rounded-xl">
                    
                </div>
            </div>
            
          </div>
        </div>

        
      </div>
      <div className="second-container">
        <div className="cardContainer">
          
          <div className="card">
            <h3><b>Skills</b></h3>
                <p className="skills"> <b>Programming Languages:</b> C++, Python, MARIE Assembly Language, MATLAB. </p>
                <p className="skills"> <b>Web Technologies:</b> HTML, CSS, JavaScript. </p>
                <p className="skills"> <b>Frameworks & Runtime:</b> React, Node.js. </p>
                <p className="skills"> <b>Tools:</b> Git, GitHub. </p>
                <p className="skills"> <b>Core Areas:</b> Object-Oriented Programming, Data Structures, Algorithms, Databases, Soft-
                ware Development, Problem Solving. </p>
                <p className="skills"> <b>Soft Skills:</b> Team Coordination, Communication, Leadership, Task Planning, Critical
                Thinking. </p>
                <p className="skills"> <b>Languages:</b> Spanish (Native) / English (B2). </p> 
                <div className="w-[100%] h-[300px] bg-gray">
                  <img className="w-[100%] h-[300px] rounded-xl" src={skills} />
                </div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}

export default Home;;