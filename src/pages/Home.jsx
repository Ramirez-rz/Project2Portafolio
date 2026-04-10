import React from "react";

function Home() {
  return (
    <div class={"container"}>
      <h1 class={"title"}>Web Portfolio</h1>
      
      <p class={"subtitle"}>
        Software Engineering student with a strong interest in front end development and project development, enjoys building digital experiences from start to finish, focused on creating clean and user focused interfaces, interested in planning, structure and clear documentation, combining creativity and organization to deliver solutions that are well built and easy to understand.
      </p>

      <div class={"cardContainer"}>
        <div class={"card"}>
          <h3>About Me</h3>
          <p>Andrés Ramírez Ruiz, 20 years old, currently studying Ingeniería en Tecnologías Computacionales at el Tecnológico de Monterrey. I’ve been into video games and technology since I was young, which sparked my curiosity for how things are built and how they work. I’m currently Ascendant in Valorant and play as a left winger in football, so I enjoy competition and constantly improving. I also like socializing, meeting new people, and being part of collaborative environments where ideas can grow. I’m a big fan of Cristiano Ronaldo and his mindset, and I enjoy listening to artists like The Weeknd, Bad Bunny, Billie Eilish, Mora, Rauw Alejandro, and Don Toliver. I’m naturally drawn to organizing ideas, planning projects, and designing solutions that are clear, functional, and well structured.</p>
        </div>

        <div class={"card"}>
          <h3>Projects</h3>
          <p>Check out some of the work I've done:</p>
        </div>

        <div class={"card"}>
          <h3>Contact Me</h3>
          <p>Mail me</p>
        </div>
      </div>
    </div>
  );
}

export default Home;