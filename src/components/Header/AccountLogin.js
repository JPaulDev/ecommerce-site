import styled from 'styled-components';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';

const Container = styled.div`
  display: flex;
  column-gap: 7px;
`;

const StyledIcon = styled(UserIcon)`
  width: 28px;
  height: auto;
`;

const Title = styled.div`
  font-size: 1.05rem;
  line-height: 1.05rem;
`;

const Link = styled.a`
  font-size: 0.8rem;
  text-decoration: none;
  cursor: pointer;
  color: black;
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
