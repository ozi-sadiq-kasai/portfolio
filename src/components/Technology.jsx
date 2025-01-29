import styled from 'styled-components';
import { FaNodeJs } from 'react-icons/fa';
import { GrReactjs } from 'react-icons/gr';
import { RiTailwindCssFill } from 'react-icons/ri';
import { BsFiletypeCss } from 'react-icons/bs';
import { BsFiletypeScss } from 'react-icons/bs';

const Technology = () => {
    const languages = [
        <FaNodeJs key="nodejs" />,
        <GrReactjs key="reactjs" />,
        <RiTailwindCssFill key="tailwindcss" />,
        <BsFiletypeCss key="css" />,
        <BsFiletypeScss key="scss" />,
    ];
    const colors = ['#68A063', '#61DAFB', '#38BDF8', '#264de4', '#CF649A'];
    return (
        <StyledWrapper className='container' id='technology'>
            <h2>Technology</h2>
            <StyledContent>
                {languages.map((language, index) => (
                    <li key={index} style={{color:colors[index]}}>{language}</li>
                ))}
            </StyledContent>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.section`
    h2 {
        text-align: center;
        margin-bottom: 0.5rem;
        color: var(--primary-300);
    }
`;
export default Technology;
const StyledContent = styled.ul`
    display: flex;
    padding:1rem;
    margin-bottom:1rem;
    background-color: var(--primary-100);
    align-items: center;
    justify-content: space-around;
    li {
        font-size: 3rem;
    }
`;
