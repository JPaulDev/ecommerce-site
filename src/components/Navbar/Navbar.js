import styled from 'styled-components';
import NavItem from './NavItem';

const Nav = styled.nav`
  background-color: #2f2f2f;
  width: 100%;
  box-shadow: 0 3px 2px 0 rgb(0 0 0 / 0.2);
  user-select: none;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

function Navbar() {
  return (
    <Nav>
      <NavLinks>
        <NavItem hasDropdown={false}>Home</NavItem>
        <NavItem hasDropdown={true}>Components</NavItem>
        <NavItem hasDropdown={true}>Accessories</NavItem>
        <NavItem hasDropdown={false}>About</NavItem>
        <NavItem hasDropdown={false}>Contact</NavItem>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
