import styled from 'styled-components';
import NavItem from './NavItem';

const Nav = styled.nav`
  width: 100%;
  background-color: var(--nav-dark-grey);
  box-shadow: var(--box-shadow-small);
  user-select: none;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

function Navbar() {
  return (
    <Nav>
      <List>
        <NavItem hasDropdown={false}>Home</NavItem>
        <NavItem hasDropdown={true}>Components</NavItem>
        <NavItem hasDropdown={true}>Accessories</NavItem>
        <NavItem hasDropdown={false}>About</NavItem>
        <NavItem hasDropdown={false}>Contact</NavItem>
      </List>
    </Nav>
  );
}

export default Navbar;
