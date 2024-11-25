import styled from 'styled-components';
import { useEffect } from 'react';
import { device } from '../utils/mediaQueries';

const Hero = () => {
    useEffect(() => {
        const blocks = document.querySelectorAll('.block');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    } else {
                        entry.target.classList.remove('animate'); // Remove this line if you want the animation to happen only once
                    }
                });
            },
            { threshold: 0.3 } // Trigger animation when 30% of the block is visible
        );

        blocks.forEach((block) => observer.observe(block));

        // Clean up the observer
        return () => observer.disconnect();
    }, []);

    return (
        <StyledWrapper className='container'>
            <h2 className='block'>Ozi sadiq-kasai</h2>
            <p>
                Hi i’m a Frontend Web Developer and i build engaging
                user interfaces.
            </p>
        </StyledWrapper>
    );
};

// Styled Components
const StyledWrapper = styled.section`
    background-color: var(--primary-100);
    position: relative;
    h2 {
        position: absolute;
        top: -1.7rem;
        margin-bottom: 0;
        color: var(--primary-300);
    }
    p {
        margin-top: 1rem;
        color: var(--textColor);
        font-size: 2rem;
    }
    .block {
        opacity: 0;
        transform: translateX(450px);
        transition: opacity 1s ease, transform 3s ease;
    }

    .animate {
        opacity: 1;
        transform: translateX(0);
    }
    @media ${device.mobile} {
        padding: 1rem;
        h2 {
            font-size: 2rem;
            top: -1.4rem;
        }
        p {
            font-size: 1.4rem;
            // margin-top: 0;
        }
    }
`;
export default Hero;
