import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import Navbar from './Navbar';
import AccountLogin from './AccountLogin';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 15px 30px;
  user-select: none;
  background-color: #434343;
  color: white;
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
        <AccountLogin />
        <div>Basket</div>
      </Container>
    </StyledHeader>
  );
}

export default Header;
