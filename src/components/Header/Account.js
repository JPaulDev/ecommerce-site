import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { ReactComponent as UserIcon } from '../../assets/svg/user.svg';
import Link from './Link';

const StyledIcon = styled(UserIcon)`
  width: 30px;
  height: auto;
  fill: var(--main-orange);
  cursor: pointer;

  @media screen and (min-width: 1200px) {
    width: 35px;
  }
`;

const TopLink = styled.a`
  display: block;
  color: white;
  font-size: 1.1rem;
  line-height: 1.1rem;
  text-decoration: none;
`;

function Account() {
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
          <TopLink href="">Account</TopLink>
          <Link href="">Login | Create Account</Link>
        </div>
      )}
    </>
  );
}

export default Account;
