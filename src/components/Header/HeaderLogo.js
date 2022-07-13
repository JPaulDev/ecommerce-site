import styled from 'styled-components';
import headerLogo from '../../assets/images/header-logo.png';

const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const Image = styled.img`
  width: 150px;
  height: auto;

  @media screen and (min-width: 576px) {
    width: 210px;
  }
`;

function HeaderLogo() {
  return (
    <ImageWrapper>
      <Image src={headerLogo} alt="PC-Connect.com" />
    </ImageWrapper>
  );
}

export default HeaderLogo;
