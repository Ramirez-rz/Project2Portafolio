import { Link } from "react-router-dom";
import P1 from "./P1.png";
import P3 from "./P3.png";
import P5 from "./P5.png";

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
                        <div className="w-[950px] h-[200px] flex flex-nowrap gap-3">
                            <div className="w-[300px] h-[200px] bg-white rounded-xl place-items-center">
                                    <a
                                        href="https://github.com/Ramirez-rz/Proyecto1Calculadora" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <img className="w-[100%] h-[100%] rounded-xl cursor-pointer" src={P1} />
                                    </a>
                            </div>
                            <div className="w-[300px] h-[200px] bg-white rounded-xl place-items-center">
                                    <a
                                        href="https://github.com/Ramirez-rz/Proyecto3" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <img className="w-[100%] h-[100%] rounded-xl cursor-pointer" src={P3} />
                                    </a> 
                            </div>
                            <div className="w-[300px] h-[200px] bg-white rounded-xl place-items-center">
                                    <a
                                        href="https://chatify-ui-chi.vercel.app/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <img className="w-[100%] h-[100%] rounded-xl cursor-pointer" src={P5} />
                                    </a>
                            </div>
                            <div className="w-[300px] h-[200px] rounded-xl place-items-center">
                            
                            </div>
                        </div>
                        <div className="h-[20px]" />
                        <div className="w-[950px] h-[200px] flex flex-nowrap gap-3">
                            <div className="w-[300px] h-[350px] bg-white rounded-xl">

                            </div>
                            <div className="w-[300px] h-[350px] bg-white rounded-xl">

                            </div>
                            <div className="w-[300px] h-[350px] bg-white rounded-xl">

                            </div>
                            <div className="w-[300px] h-[350px] rounded-xl">
                                
                            </div>
                        </div>
                     
                    </div>
            </div>
        </>
    );
};

export default Projects;