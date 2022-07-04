import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import Components from './Components';
import Accessories from './Accessories';
import Advertisements from './Advertisements';

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

function Dropdown({ menu, handleClose }) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      const shouldHandleClose = menu !== e.target.dataset.menuName;

      if (ref.current && !ref.current.contains(e.target) && shouldHandleClose) {
        handleClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, menu, handleClose]);

  let content = null;

  if (menu === 'Components') {
    content = (
      <Container ref={ref} maxWidth="1100px">
        <Components />
        <Advertisements menu={menu} />
      </Container>
    );
  } else if (menu === 'Accessories') {
    content = (
      <Container ref={ref} maxWidth="735px">
        <Accessories />
        <Advertisements menu={menu} />
      </Container>
    );
  }

  return <>{content}</>;
}

export default Dropdown;
