import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <>  
            <div class="main-container">
               <h1 class="main-text">Projects</h1> 
                <p>
                    <div className="cardbutton">
                        <Link to ="/">Go Back</Link>
                    </div>
                </p> 
            </div>
            <div className="cardContainer">
                <div className="card">

                     
                </div>
            </div>
        </>
    );
};

export default Projects;