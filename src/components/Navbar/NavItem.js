import styled from 'styled-components';
import { useState } from 'react';
import Dropdown from './Dropdown';

const Link = styled.a`
  display: inline-block;
  font-size: 0.85rem;
  color: var(--color-white);
  text-decoration: none;
  cursor: pointer;
  padding: 15px 20px;
  border: none;
  background: none;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: var(--header-grey);
  }
  && {
    background-color: ${(props) => props.open && 'white'};
    color: ${(props) => props.open && 'var(--text-dark)'};
  }
`;

function NavItem({ children, hasDropdown }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

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
        <Link href="">{children}</Link>
      )}

      {open && <Dropdown menu={children} handleClose={handleClose} />}
    </li>
  );
}

export default NavItem;
