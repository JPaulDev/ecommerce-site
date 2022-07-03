import styled from 'styled-components';
import Category from './Category';
import DropdownItem from './DropdownItem';

const List = styled.ul`
  flex: 1;
  list-style: none;
  padding: 30px;
`;

function Accessories() {
  return (
    <>
      <List>
        <Category>Keyboards</Category>
        <DropdownItem>Wired Keyboards</DropdownItem>
        <DropdownItem>Wireless Keyboards</DropdownItem>
        <DropdownItem>Gaming Keyboards</DropdownItem>
        <Category>Mice</Category>
        <DropdownItem>Wired Mice</DropdownItem>
        <DropdownItem>Wireless Mice</DropdownItem>
      </List>
      <List>
        <Category>Audio</Category>
        <DropdownItem>Microphones</DropdownItem>
        <DropdownItem>Speakers</DropdownItem>
        <Category>Monitors</Category>
        <DropdownItem>Gaming Monitors</DropdownItem>
      </List>
    </>
  );
}

export default Accessories;
