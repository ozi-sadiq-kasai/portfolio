import styled from "styled-components";
import clearmind from "../assets/clearmind.png"
import Foxhall from '../assets/Foxhall.png'
import cbae from '../assets/cbae.png'
import { DiGithubBadge } from "react-icons/di";
import { FaLink } from "react-icons/fa6";
import { device } from '../utils/mediaQueries'

const Projects = () => {
    const projects = [
        {
            image: Foxhall,
            heading: "Winery Landing Page",
            description: "A responsive Landing Page built with styled components",
            link:"https://foxhall.onrender.com",
            code:"https://github.com/ozi-sadiq-kasai/Foxhall",
        },
        {
            image: cbae,
            heading: "Fully Responsive Menu Listing",
            link:'https://react-cbae-menu.vercel.app',
            description: "A responsive restaurant menu app for a local eatery, powered by a CMS backend for effortless menu and price updates",
        },
        {
            image: clearmind,
            heading: "Mental Health Landing Page",
            description: "A responsive landing page with smooth scroll animations and vibrant, mood-reflective colors to convey the organization’s energy and mission.",
            link:"https://clear-mind-m4mn.onrender.com",
            code:"https://github.com/ozi-sadiq-kasai/clear-mind",
        },
       
     
    ];

    return (
        <StyledContent className="container" id='projects'>
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
        min-height:80vh;
    }

    .img {
         width: 100%;
        height: 70%;
        object-fit: cover; 
    }

    h2 {
        padding-top:5px;
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
padding-bottom:15px;

a {
            color: var(--primary-500);
            font-size: 1.5rem;
            transition: color 0.3s ease;

            &:hover {
                color: var(--primary-100);
            }
        }
    }

    @media ${device.mobile}{
        flex-direction: column;
    }
    .div-links{
        padding-bottom:0;
    }
    
`;

export default Projects;
