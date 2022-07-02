import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #2f2f2f;
  width: 100%;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

const ListItem = styled.li`
  color: white;
  cursor: pointer;
`;

function Navbar() {
  return (
    <Nav>
      <NavLinks>
        <ListItem>Home</ListItem>
        <ListItem>Shop</ListItem>
        <ListItem>About</ListItem>
        <ListItem>Contact</ListItem>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
