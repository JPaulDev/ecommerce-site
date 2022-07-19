import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import useMedia from '../../hooks/useMedia';
import Components from './Components';
import Accessories from './Accessories';
import Advertisements from './Advertisements';

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-white);
  box-shadow: var(--box-shadow-small);
`;

export default function Dropdown({ menu, handleClose }) {
  const match = useMedia('(min-width: 900px)');
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
      {match && <Advertisements menu={menu} />}
    </Container>
  );
}
