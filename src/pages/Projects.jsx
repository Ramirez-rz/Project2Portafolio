import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <>  
            <div class="main-container">
               <h1 class="main-text">Projects</h1> 
                <p>
                    <Link to ="/">Go Back</Link>
                </p> 
            </div>
        </>
    );
};

export default Projects;