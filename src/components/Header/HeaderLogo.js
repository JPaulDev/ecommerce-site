import styled from 'styled-components';
import headerLogo from '../../images/header-logo.png';

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
`;

const Image = styled.img`
  width: 250px;
  height: auto;
`;

function HeaderLogo() {
  return (
    <ImageWrapper>
      <Image src={headerLogo} alt="Pc connect logo" />
    </ImageWrapper>
  );
}

export default HeaderLogo;
