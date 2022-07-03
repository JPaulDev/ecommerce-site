import styled from 'styled-components';
import Category from './Category';
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
        <Category>Processors</Category>
        <DropdownItem>AMD</DropdownItem>
        <DropdownItem>Intel</DropdownItem>
        <DropdownItem>Server CPUs</DropdownItem>
        <Category>Memory</Category>
        <DropdownItem>DDR5</DropdownItem>
        <DropdownItem>DDR4</DropdownItem>
        <DropdownItem>DDR3</DropdownItem>
        <Category>Motherboards</Category>
        <DropdownItem>AMD Motherboards</DropdownItem>
        <DropdownItem>Intel Motherboards</DropdownItem>
      </List>
      <List>
        <Category>Graphics Cards</Category>
        <DropdownItem>NVIDIA Graphics Cards</DropdownItem>
        <DropdownItem>AMD Graphics Cards</DropdownItem>
        <Category>Power Supplies</Category>
        <DropdownItem>All PSUs</DropdownItem>
        <DropdownItem>Fully Wired</DropdownItem>
        <DropdownItem>Fully Modular</DropdownItem>
      </List>
      <List>
        <Category>Cases</Category>
        <DropdownItem>Full Tower</DropdownItem>
        <DropdownItem>Midi Tower</DropdownItem>
        <DropdownItem>ITX</DropdownItem>
        <Category>Storage</Category>
        <DropdownItem>Solid State Drives</DropdownItem>
      </List>
    </>
  );
}

export default Components;
