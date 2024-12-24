import styled from 'styled-components';
import { device } from '../utils/mediaQueries';

const About = () => {
    return (
        <StyledContent className='container' id='about'>
            <h2>About</h2>
            <p>
                As a frontend developer, crafting engaging,
                user-friendly interfaces that merge creativity with
                technical precision is a primary focus. By leveraging
                modern web technologies, visually appealing and highly
                functional applications are designed and developed.
                From creating dynamic web experiences to enhancing
                existing systems, the goal is to deliver value through
                thoughtful design and seamless usability. <br />
                Beyond professional endeavors, a strong passion lies
                in empowering the next generation of developers.
                Actively training and mentoring girls interested in
                web development fosters their skills and confidence,
                helping them thrive in the tech industry.
            </p>
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
    p {
        margin: 0 auto;
        max-width: 100vw;
        width: 60vw;
        font-size: 1.2rem;
    }
    @media ${device.mobile} {
        padding: 1rem;
        h2 {
            font-size: 2rem;
        }
        p {
            width: 90vw;
            font-size: 1.2rem;
        }
    }
`;

export default About;
