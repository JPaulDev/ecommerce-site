import styled from 'styled-components';
import CategoryHeader from './CategoryHeader';
import DropdownItem from './DropdownItem';

const List = styled.ul`
  flex: 1;
  list-style: none;
  padding: 30px;
`;

function Components() {
  return (
    <>
      <List>
        <CategoryHeader>Processors</CategoryHeader>
        <DropdownItem>AMD</DropdownItem>
        <DropdownItem>Intel</DropdownItem>
        <DropdownItem>Server CPUs</DropdownItem>
        <CategoryHeader>Memory</CategoryHeader>
        <DropdownItem>DDR5</DropdownItem>
        <DropdownItem>DDR4</DropdownItem>
        <DropdownItem>DDR3</DropdownItem>
        <CategoryHeader>Motherboards</CategoryHeader>
        <DropdownItem>AMD Motherboards</DropdownItem>
        <DropdownItem>Intel Motherboards</DropdownItem>
      </List>
      <List>
        <CategoryHeader>Graphics Cards</CategoryHeader>
        <DropdownItem>NVIDIA Graphics Cards</DropdownItem>
        <DropdownItem>AMD Graphics Cards</DropdownItem>
        <CategoryHeader>Power Supplies</CategoryHeader>
        <DropdownItem>All PSUs</DropdownItem>
        <DropdownItem>Fully Wired</DropdownItem>
        <DropdownItem>Fully Modular</DropdownItem>
      </List>
      <List>
        <CategoryHeader>Cases</CategoryHeader>
        <DropdownItem>Full Tower</DropdownItem>
        <DropdownItem>Midi Tower</DropdownItem>
        <DropdownItem>ITX</DropdownItem>
        <CategoryHeader>Storage</CategoryHeader>
        <DropdownItem>Solid State Drives</DropdownItem>
      </List>
    </>
  );
}

export default Components;
