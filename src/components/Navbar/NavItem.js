import styled from 'styled-components';
import Dropdown from './Dropdown';

const ListItem = styled.li`
  font-size: 0.9rem;
  color: white;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: #434343;
  }
  && {
    background-color: ${(props) => props.active && 'white'};
    color: ${(props) => props.active && '#333333'};
  }
`;

const Link = styled.a`
  display: inline-block;
  padding: 15px 20px;
`;

function NavItem({ title, dropdown, openMenu, onOpen }) {
  const isDropdownVisible = title === openMenu;

  return (
    <ListItem active={isDropdownVisible} onClick={() => onOpen(title)}>
      {dropdown ? (
        <>
          <Link as="span">{title}</Link>
          {isDropdownVisible && <Dropdown openMenu={openMenu} />}
        </>
      ) : (
        <Link>{title}</Link>
      )}
    </ListItem>
  );
}

export default NavItem;
