import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { ReactComponent as BasketIcon } from '../../assets/svg/basket.svg';
import Link from './Link';

const StyledIcon = styled(BasketIcon)`
  width: 32px;
  height: auto;
  fill: var(--main-orange);
  cursor: pointer;

  @media screen and (min-width: 1200px) {
    width: 37px;
  }
`;

const TopLink = styled.a`
  display: block;
  color: white;
  font-size: 1.1rem;
  line-height: 1.1rem;
  text-decoration: none;
`;

function Basket() {
  const [match, setMatch] = useState(window.innerWidth >= 576);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 576px)');

    const handleMatch = (e) => {
      setMatch(e.matches);
    };

    mediaQuery.addEventListener('change', handleMatch);

    return () => mediaQuery.removeEventListener('change', handleMatch);
  }, []);

  return (
    <>
      <StyledIcon />
      {match && (
        <div>
          <TopLink href="">Basket</TopLink>
          <Link href="">Subtotal £0.00</Link>
        </div>
      )}
    </>
  );
}

export default Basket;
