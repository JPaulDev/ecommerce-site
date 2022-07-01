import styled from 'styled-components';
import Navbar from './Navbar';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 10px;
  user-select: none;
`;

const HeaderImage = styled.img`
  width: 250px;
  height: 75px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
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
      <ImageWrapper>
        <HeaderImage />
      </ImageWrapper>
      <Navbar />
      <Container>
        <div>Account</div>
        <div>Basket</div>
      </Container>
    </StyledHeader>
  );
}

export default Header;
