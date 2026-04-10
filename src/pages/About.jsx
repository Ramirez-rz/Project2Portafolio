import { Link } from "react-router-dom";
import "./About.css"
import miles from "./Miles.webp";



const About = () => {
    return (
        <>
            <div class="main-container">
               <h1 class="main-text">About Me</h1> 
                <p>
                    <Link to ="/">Go Back</Link>
                </p> 
            </div>
            <div class="mega-container">
                   <div class="text-container normal-text">
                    <p>
                        Andrés Ramírez Ruiz, 20 years old, currently studying Ingeniería en Tecnologías Computacionales at el Tecnológico de Monterrey. I’ve been into video games and technology since I was young, which sparked my curiosity for how things are built and how they work. I’m currently Ascendant in Valorant and play as a left winger in football, so I enjoy competition and constantly improving. I also like socializing, meeting new people, and being part of collaborative environments where ideas can grow. I’m a big fan of Cristiano Ronaldo and his mindset, and I enjoy listening to artists like The Weeknd, Bad Bunny, Billie Eilish, Mora, Rauw Alejandro, and Don Toliver. I’m naturally drawn to organizing ideas, planning projects, and designing solutions that are clear, functional, and well structured.
                    </p> 
            
                </div>
                <div class="img-container">
                    <img src={miles} />
                </div>
            </div> 
            
        </>
    );
};

export default About;