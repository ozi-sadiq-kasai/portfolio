import { useState } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { device } from '../utils/mediaQueries';
import { FaThreads } from 'react-icons/fa6';
import { AiFillLinkedin } from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const links = ['About', 'Projects', 'Technology'];
  const socials = [
    { icon: <AiFillLinkedin/>, url: 'https://www.linkedin.com/in/ozi-sadiq-16158b341/' },
    { icon: <FaThreads />, url: 'https://www.threads.net/@orzonweb?hl=en' },
];

  return (
    <>
      <NavbarWrapper>
        <NavbarContent>
          <Logo>O</Logo>
          <NavLinksDesktop>
            {links.map((link, index) => (
              <li key={index}>
                <NavAnchor
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.toLowerCase()).scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }}>
                  {link}
                </NavAnchor>
              </li>
            ))}
          </NavLinksDesktop>
          <SocialIconsDesktop>
            {socials.map((social, index) => (
              <li key={index}>
                <SocialIconLink href={social.url}target="_blank" rel="noopener noreferrer">{social.icon}</SocialIconLink>
              </li>
            ))}
          </SocialIconsDesktop>
          <MenuToggle
            aria-expanded={showMenu}
            onClick={() => setShowMenu(!showMenu)}>
            ☰
          </MenuToggle>
        </NavbarContent>
      </NavbarWrapper>

      {createPortal(
        <Menu className={showMenu ? 'show' : ''}>
          <NavLinks>
            {links.map((link, index) => (
              <li key={index}>
                <NavAnchor
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setShowMenu(false)}>
                  {link}
                </NavAnchor>
              </li>
            ))}
          </NavLinks>
          <SocialIcons>
            {socials.map((social, index) => (
              <li key={index}>
                <SocialIconLink
                  href={social.url}
                  onClick={() => setShowMenu(false)}
                 target="_blank" rel="noopener noreferrer"
                  >
                  {social.icon}
                </SocialIconLink>
              </li>
            ))}
          </SocialIcons>
        </Menu>,
        document.body // Append to the body or a specific portal root
      )}
    </>
  );
};

// Styled Components
const NavbarWrapper = styled.nav`
  clip-path: ellipse(67% 62% at 66% 0%);
  background-color: var(--primary-400);
  width: 100%;
  height: 200px;
`;

const NavbarContent = styled.div`
  padding: 5px 3px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;

const Logo = styled.h1`
  flex: 1;
  margin-bottom: 0;
  font-weight: 900;
  color: var(--highlights);
  font-family: 'Bokor', Georgia, 'Times New Roman', serif;

  @media ${device.mobile} {
    margin-left: 2rem;
  }
  @media ${device.tablet}, ${device.laptop}, ${device.desktopLarge} {
    margin-left: 10rem;
  }
`;

const NavLinksDesktop = styled.ul`
  display: none;

  @media ${device.tablet}, ${device.laptop}, ${device.desktopLarge} {
    display: flex;
    gap: 20px;
    flex: 1;
  }
`;

const SocialIconsDesktop = styled.ul`
  display: none;

  @media ${device.tablet}, ${device.laptop}, ${device.desktopLarge} {
    display: flex;
    gap: 15px;
    justify-content: center;
    padding-right: 1.5rem;
  }
`;

const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 80%;
  max-width: 50vw;
  background-color: var(--primary-300);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &.show {
    transform: translateX(0);
  }

  @media ${device.tablet}, ${device.laptop}, ${device.desktopLarge} {
    display: none;
  }
`;

const MenuToggle = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--highlights);
  cursor: pointer;
  margin-right: 1rem;

  &:hover {
    color: var(--primary-600);
  }

  @media ${device.tablet}, ${device.laptop}, ${device.desktopLarge} {
    display: none;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0;
`;

const NavAnchor = styled.a`
  color: var(--primary-600);
  text-decoration: none;
  font-weight: bold;
  cursor:pointer;

  &:hover {
    color: var(--highlights);
  }
`;

const SocialIcons = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  padding: 0;
`;

const SocialIconLink = styled.a`
  color: var(--primary-200);
  &:hover {
    color: var(--highlights);
  }
`;

export default Navbar;
