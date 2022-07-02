import styled from 'styled-components';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';

const Container = styled.div`
  display: flex;
  column-gap: 8px;
`;

const StyledIcon = styled(UserIcon)`
  width: 28px;
  height: auto;
  fill: #ff9110;
`;

const Title = styled.div`
  font-size: 1.05rem;
  line-height: 1.05rem;
`;

const Link = styled.a`
  font-size: 0.8rem;
  text-decoration: none;
  cursor: pointer;
  color: #b3b3b3;
  transition: color 200ms ease-in-out;

  &:hover {
    color: white;
  }
`;

function AccountLogin() {
  return (
    <Container>
      <StyledIcon />
      <div>
        <Title>Account</Title>
        <Link href="">Login | Create Account</Link>
      </div>
    </Container>
  );
}

export default AccountLogin;
