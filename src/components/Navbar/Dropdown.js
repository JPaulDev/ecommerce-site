import styled from 'styled-components';
import DropdownItem from './DropdownItem';

const List = styled.ul`
  position: absolute;
  z-index: 10;
  list-style: none;
  left: 50%;
  transform: translateX(-50%);
`;

function Dropdown({ openMenu }) {
  let content = null;

  if (openMenu === 'Components') {
    content = (
      <List>
        <DropdownItem>Processors</DropdownItem>
        <DropdownItem>Graphics Cards</DropdownItem>
        <DropdownItem>Memory</DropdownItem>
        <DropdownItem>Motherboards</DropdownItem>
      </List>
    );
  } else if (openMenu === 'Accessories') {
    content = (
      <List>
        <DropdownItem>Keyboards</DropdownItem>
        <DropdownItem>Mice</DropdownItem>
      </List>
    );
  }

  return <>{content}</>;
}

export default Dropdown;
