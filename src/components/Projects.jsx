import styled from "styled-components";
import girl from "../assets/girl.jpg";

const Projects = () => {
    const projects = [
        {
            image: girl,
            heading: "heading1",
            description: "alkflskfjlsdjflsfjask",
        },
        {
            image: girl,
            heading: "heading2",
            description: "alkflskfjlsdjflsfjask",
        },
        {
            image: girl,
            heading: "heading3",
            description: "alkflskfjlsdjflsfjask",
        },
        {
            image: girl,
            heading: "heading4",
            description: "alkflskfjlsdjflsfjask",
        },
        {
            image: girl,
            heading: "heading5",
            description: "alkflskfjlsdjflsfjask",
        },
        {
            image: girl,
            heading: "heading6",
            description: "alkflskfjlsdjflsfjask",
        },
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
        padding: 3px;
        text-align: center;
        border-radius: 5px;
    }

    .img {
        height: 200px;
        border-radius: 4px;
        margin-bottom: 0.5rem;
    }

    h2 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1rem;
        margin: 0;
    }
`;

export default Projects;
