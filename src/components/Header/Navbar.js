import styled from 'styled-components';

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  column-gap: 20px;
  margin: 0 20px;
`;

const ListItem = styled.li`
  cursor: pointer;
`;

function Navbar() {
  return (
    <nav>
      <NavLinks>
        <ListItem>Home</ListItem>
        <ListItem>Shop</ListItem>
        <ListItem>About</ListItem>
        <ListItem>Contact</ListItem>
      </NavLinks>
    </nav>
  );
}

export default Navbar;
