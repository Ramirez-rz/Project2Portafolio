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
                        I am a Software Engineering student with a strong interest in front-end development and the overall process of building technological projects. I am passionate about designing interfaces that are visually appealing, functional, and focused on user experience, paying close attention to both aesthetics and usability.
                    </p> 
                    
                    <p>
                        In addition, I genuinely enjoy the full project development cycle, from planning and organization to technical documentation. I believe that clear structure, well-defined processes, and solid documentation are essential for creating efficient and scalable solutions. I strive to combine creativity with logic, contributing both to the visual side and to the organization and management of projects.
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