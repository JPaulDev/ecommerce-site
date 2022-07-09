import styled from 'styled-components';
import { useMedia } from '../../hooks/useMedia';
import HeaderLogo from './HeaderLogo';
import SearchInput from './SearchInput';
import Account from './Account';
import Basket from './Basket';

const StyledHeader = styled.header`
  width: 100%;
  position: relative;
  background-color: var(--header-grey);
  box-shadow: var(--box-shadow-small);
  z-index: 10;
`;

const Wrapper = styled.div`
  max-width: 1800px;
  width: 92%;
  display: flex;
  align-items: center;
  padding: 15px 0px;
  user-select: none;
  margin: 0 auto;

  @media screen and (min-width: 576px) {
    width: 98%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  column-gap: 20px;

  @media screen and (min-width: 576px) {
    min-width: 330px;
  }
  @media screen and (min-width: 1200px) {
    column-gap: 40px;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  column-gap: 10px;
`;

function Header() {
  const match = useMedia('(min-width: 850px)');

  return (
    <StyledHeader>
      <Wrapper>
        <HeaderLogo />
        {match && <SearchInput />}
        <Container>
          <LinkContainer>
            <Account />
          </LinkContainer>
          <LinkContainer>
            <Basket />
          </LinkContainer>
        </Container>
      </Wrapper>
      {!match && <SearchInput />}
    </StyledHeader>
  );
}

export default Header;
