import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import AccountLogin from './AccountLogin';

const StyledHeader = styled.header`
  width: 100%;
  position: relative;
  background-color: #434343;
  color: white;
  box-shadow: 0 3px 2px 0 rgb(0 0 0 / 0.2);
  z-index: 10;
`;

const Wrapper = styled.div`
  max-width: 1800px;
  width: 97%;
  display: flex;
  align-items: center;
  padding: 15px 0px;
  user-select: none;
  margin: 0 auto;
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
      <Wrapper>
        <HeaderLogo />
        <Container>
          <AccountLogin />
          <div>Basket</div>
        </Container>
      </Wrapper>
    </StyledHeader>
  );
}

export default Header;
