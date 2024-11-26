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
                        entry.target.classList.remove('animate');
                    }
                });
            },
            { threshold: 0.1 }
        );

        blocks.forEach((block) => observer.observe(block));

        // Handle viewport resize
        const handleResize = () => {
            blocks.forEach((block) =>
                block.classList.remove('animate')
            );
        };
        window.addEventListener('resize', handleResize);

        // Clean up
        return () => {
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
        };
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
            border: 1px sold red;
        }
        p {
            font-size: 1.4rem;
        }
        .block {
            opacity: 0;
            transform: translateX(200px);
            transition: opacity 1s ease, transform 3s ease;
        }
    }
`;
export default Hero;
