import styled from 'styled-components';
import { ReactComponent as UserIcon } from '../../assets/svg/user.svg';
import Icon from './Icon';
import Link from './Link';

const TopLink = styled.a`
  display: block;
  color: white;
  font-size: 1.05rem;
  line-height: 1.05rem;
  text-decoration: none;
`;

function Account() {
  return (
    <>
      <Icon icon={UserIcon} width="29px" />
      <div>
        <TopLink href="">Account</TopLink>
        <Link href="">Login | Create Account</Link>
      </div>
    </>
  );
}

export default Account;
