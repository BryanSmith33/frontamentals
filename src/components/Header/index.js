import React from 'react';
import Link from 'gatsby-link';
import logo from './logo.svg';
import styled from 'styled-components';

const NavBar = styled.nav`
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem 1.45rem;
  border-bottom: 1px solid #2c5776;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  @media(max-width:700px){
    justify-content: center;
    position: initial;
  }
`;
const Branding = styled.div`
  max-width: 960px;
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  margin: 0 10px;
  height: 35px;
`;
const Title = styled.h1`
  margin: 0;
  font-family: 'Fira';
  font-size: 1.6em;
  font-weight: 100;
`;
const Links = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  font-family: 'Fira';
  @media(max-width:700px){
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: space-around;
    padding: 20px 0;
    margin: 15px 0 0;
    border-top: 1px solid #2c5776;
    background: rgba(255, 255, 255, 0.95);
    z-index: 2;
  }
`;
const NavLink = styled.li`
  margin: 0 10px;
  @media(max-width:700px){
    font-size: 1.15em;
  }
`;
const Header = () => {
  return (
    <NavBar>
      <Branding>
        <Logo src={logo} alt="Frontamentals. Your source for front end development" />
        <Title>
          <Link to="/">
            Frontamentals
            </Link>
        </Title>
      </Branding>
      <div>
        <Links>
          <Link to={`/html`}><NavLink>HTML</NavLink></Link>
          <Link to={`/css`}><NavLink>CSS</NavLink></Link>
          <Link to={`/javascript`}><NavLink>JavaScript</NavLink></Link>
          <Link to={`/search`}><NavLink>Search</NavLink></Link>
        </Links>
      </div>
    </NavBar>
  )
}

export default Header;
