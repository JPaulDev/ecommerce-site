import styled from 'styled-components';
import CategoryHeader from './CategoryHeader';
import DropdownItem from './DropdownItem';

const List = styled.ul`
  flex: 1;
  list-style: none;
  padding: 30px;
`;

export default function Accessories() {
  return (
    <>
      <List>
        <CategoryHeader>Keyboards</CategoryHeader>
        <DropdownItem>Wired Keyboards</DropdownItem>
        <DropdownItem>Wireless Keyboards</DropdownItem>
        <DropdownItem>Gaming Keyboards</DropdownItem>
        <CategoryHeader>Mice</CategoryHeader>
        <DropdownItem>Wired Mice</DropdownItem>
        <DropdownItem>Wireless Mice</DropdownItem>
      </List>
      <List>
        <CategoryHeader>Audio</CategoryHeader>
        <DropdownItem>Microphones</DropdownItem>
        <DropdownItem>Speakers</DropdownItem>
      </List>
      <List>
        <CategoryHeader>Monitors</CategoryHeader>
        <DropdownItem>Gaming Monitors</DropdownItem>
        <DropdownItem>Ultrawide Monitors</DropdownItem>
        <DropdownItem>OLED Monitors</DropdownItem>
      </List>
    </>
  );
}
