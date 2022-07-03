import styled from 'styled-components';
import Components from './Components';
import Accessories from './Accessories';

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

function Dropdown({ openMenu }) {
  let content = null;

  if (openMenu === 'Components') {
    content = (
      <Container maxWidth="1100px">
        <Components />
      </Container>
    );
  } else if (openMenu === 'Accessories') {
    content = (
      <Container maxWidth="735px">
        <Accessories />
      </Container>
    );
  }

  return <>{content}</>;
}

export default Dropdown;
