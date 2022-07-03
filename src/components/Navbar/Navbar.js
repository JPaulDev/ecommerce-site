import styled from 'styled-components';
import { useState } from 'react';
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
  const [openMenu, setOpenMenu] = useState(null);

  function handleOpenMenu(clickedMenu) {
    if (clickedMenu !== openMenu) {
      setOpenMenu(clickedMenu);
    } else {
      setOpenMenu(null);
    }
  }

  return (
    <Nav>
      <NavLinks>
        <NavItem title="Home" dropdown={false} onOpen={handleOpenMenu} />
        <NavItem
          title="Components"
          dropdown={true}
          openMenu={openMenu}
          onOpen={handleOpenMenu}
        />
        <NavItem
          title="Accessories"
          dropdown={true}
          openMenu={openMenu}
          onOpen={handleOpenMenu}
        />
        <NavItem title="About" dropdown={false} onOpen={handleOpenMenu} />
        <NavItem title="Contact" dropdown={false} onOpen={handleOpenMenu} />
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
