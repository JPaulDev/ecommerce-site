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

export default function Navbar() {
  return (
    <Nav>
      <List>
        <NavItem>Home</NavItem>
        <NavItem hasDropdown={true}>Components</NavItem>
        <NavItem hasDropdown={true}>Accessories</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
      </List>
    </Nav>
  );
}
