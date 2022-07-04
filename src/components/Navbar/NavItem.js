import styled from 'styled-components';
import { useState } from 'react';
import Dropdown from './Dropdown';

const Link = styled.a`
  display: inline-block;
  font-family: inherit;
  font-size: 0.9rem;
  color: white;
  cursor: pointer;
  padding: 15px 20px;
  border: none;
  background: none;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: #434343;
  }
  && {
    background-color: ${(props) => props.open && 'white'};
    color: ${(props) => props.open && '#333333'};
  }
`;

function NavItem({ children, hasDropdown }) {
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  return (
    <li>
      {hasDropdown ? (
        <Link
          as="button"
          open={open}
          data-menu-name={children}
          onClick={() => setOpen(!open)}
        >
          {children}
        </Link>
      ) : (
        <Link>{children}</Link>
      )}

      {open && <Dropdown menu={children} handleClose={handleClose} />}
    </li>
  );
}

export default NavItem;
