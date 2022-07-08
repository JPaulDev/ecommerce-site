import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import Components from './Components';
import Accessories from './Accessories';
import Advertisements from './Advertisements';

const Container = styled.div`
  width: 98%;
  max-width: 1100px;
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  box-shadow: var(--box-shadow-small);
  z-index: 20;
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

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, menu, handleClose]);

  let content = null;

  if (menu === 'Components') {
    content = (
      <Container ref={ref}>
        <Components />
        <Advertisements menu={menu} />
      </Container>
    );
  } else if (menu === 'Accessories') {
    content = (
      <Container ref={ref}>
        <Accessories />
        <Advertisements menu={menu} />
      </Container>
    );
  }

  return <>{content}</>;
}

export default Dropdown;
