import React from "react";
import "./Home.css";

function Home() {
  return (
    
    <div className="container">
      <div className="left-container">
          <h1 className="title">Web Portfolio</h1>
        <h1 className="title">ANDRES RAMIREZ RUIZ</h1>
        <p className="subtitle">
          Software Engineering student with a strong interest in front end development and project development, enjoys building digital experiences from start to finish, focused on creating clean and user focused interfaces, interested in planning, structure and clear documentation, combining creativity and organization to deliver solutions that are well built and easy to understand.
        </p>

        <div className="cardContainer">
          <div className="card">
            <h3>About Me</h3>
            <p>Andrés Ramírez Ruiz, 20 years old, currently studying Ingeniería en Tecnologías Computacionales at el Tecnológico de Monterrey. I’ve been into video games and technology since I was young, which sparked my curiosity for how things are built and how they work. I’m currently Ascendant in Valorant and play as a left winger in football, so I enjoy competition and constantly improving. I also like socializing, meeting new people, and being part of collaborative environments where ideas can grow. I’m a big fan of Cristiano Ronaldo and his mindset, and I enjoy listening to artists like The Weeknd, Bad Bunny, Billie Eilish, Mora, Rauw Alejandro, and Don Toliver. I’m naturally drawn to organizing ideas, planning projects, and designing solutions that are clear, functional, and well structured.</p>

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
        <p>HOOLA</p>
      </div>
      
    </div>
  );
}

export default Home;;