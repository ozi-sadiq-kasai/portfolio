import styled from "styled-components";
import girl from "../assets/girl.jpg";
import clearmind from "../assets/clearmind.png"
import { DiGithubBadge } from "react-icons/di";
import { FaLink } from "react-icons/fa6";

const Projects = () => {
    const projects = [
        {
            image: clearmind,
            heading: "Mental Health Landing Page",
            description: "A responsive landing page with smooth scroll animations and vibrant, mood-reflective colors to convey the organization’s energy and mission.",
            link:"https://clear-mind-m4mn.onrender.com",
            code:"https://github.com/ozi-sadiq-kasai/clear-mind",
        },
        {
            image: girl,
            heading: "heading1",
            description: "alkflskfjlsdjflsfjask",
        }
     
    ];

    return (
        <StyledContent className="container">
            <h2>Projects</h2>
            <StyledProjects>
                {projects.map((project, index) => (
                    <li key={index}>
                        <img src={project.image} alt="thumbnail" className="img" />
                        <h2>{project.heading}</h2>
                        <p>{project.description}</p>
                        <div className="div-links">
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <FaLink />
                                </a>
                            )}
                            {project.code && (
                                <a href={project.code} target="_blank" rel="noopener noreferrer">
                                    <DiGithubBadge />
                                </a>
                            )}
                        </div>
                    </li>
                ))}
            </StyledProjects>
        </StyledContent>
    );
};

// Styled Components
const StyledContent = styled.section`
    h2 {
        text-align: center;
        margin-bottom: 0.5rem;
        color: var(--primary-300);
    }
`;

const StyledProjects = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    padding: 0;
    margin: 0;

    li {
        flex: 1 1 calc(30% - 15px); 
        border: 1px solid var(--primary-100);
        padding:0;
        text-align: center;
        border-radius: 5px;
    }

    .img {
         width: 100%;
        height: 70%;
        object-fit: cover; 
    }

    h2 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1rem;
        margin: 0;
    }
    .div-links{
display:flex;
justify-content:center;
gap:1rem;
cursor: pointer;

a {
            color: var(--primary-500);
            font-size: 1.5rem;
            transition: color 0.3s ease;

            &:hover {
                color: var(--primary-100);
            }
        }
    }
    
`;

export default Projects;
