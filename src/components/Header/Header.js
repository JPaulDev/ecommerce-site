import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import Navbar from './Navbar';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 10px;
  user-select: none;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  column-gap: 20px;
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderLogo />
      <Navbar />
      <Container>
        <div>Account</div>
        <div>Basket</div>
      </Container>
    </StyledHeader>
  );
}

export default Header;
