import styled from 'styled-components';
import { useMedia } from '../../hooks/useMedia';
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
  const match = useMedia('(min-width: 576px)');

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
