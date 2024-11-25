import styled from 'styled-components';

const Footer = () => {
    return (
        <StyledWrapper>
            <p>&copy; Ozi Sadiq-Kasai</p>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    background-color: var(--primary-400);
    padding: 8px;
    width: 100vw;

    p {
        margin: 0 auto;
        text-align: center;
    }
    p:hover {
        color: var(--highlights);
        transition: var(--transition);
        cursor:pointer;
    }
`;

export default Footer;
