import styled from 'styled-components';
import DropdownItem from './DropdownItem';

const List = styled.ul`
  position: absolute;
  z-index: 10;
  list-style: none;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  padding: 30px;
  box-shadow: 0 3px 2px 0 rgb(0 0 0 / 0.2);
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
