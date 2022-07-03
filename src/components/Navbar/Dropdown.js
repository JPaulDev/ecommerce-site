import styled from 'styled-components';
import DropdownItem from './DropdownItem';
import Category from './Category';

const Container = styled.div`
  width: 98%;
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  box-shadow: 0 3px 2px 0 rgb(0 0 0 / 0.2);
  z-index: 10;
  max-width: ${(props) => props.maxWidth};
`;

const List = styled.ul`
  flex: 1;
  list-style: none;
  padding: 30px;
`;

function Dropdown({ openMenu }) {
  let content = null;

  if (openMenu === 'Components') {
    content = (
      <Container maxWidth="1100px">
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
      </Container>
    );
  } else if (openMenu === 'Accessories') {
    content = (
      <Container maxWidth="735px">
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
      </Container>
    );
  }

  return <>{content}</>;
}

export default Dropdown;
