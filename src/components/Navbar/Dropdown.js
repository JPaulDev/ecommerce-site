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
  background-color: var(--color-white);
  box-shadow: var(--box-shadow-small);
  z-index: 20;
`;

export default function Dropdown({ menu, handleClose }) {
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

  return (
    <Container ref={ref}>
      {menu === 'Components' && <Components />}
      {menu === 'Accessories' && <Accessories />}
      <Advertisements menu={menu} />
    </Container>
  );
}
