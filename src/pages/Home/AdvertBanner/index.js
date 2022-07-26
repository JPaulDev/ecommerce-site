import styled from 'styled-components';
import ad from './RTX-Studio.webp';
import logo from './nvidia-logo.webp';
import useMedia from '../../../hooks/useMedia';
import hex from '../../../assets/svg/hexagons.svg';

const Container = styled.div`
  background-image: url(${ad});
  margin-top: 15px;
  min-height: 185px;
  position: relative;
  padding: 20px 15px;
  background-color: #ebebeb;
  background-repeat: no-repeat;
  background-position: calc(100% + 220px) 50%;
  background-size: auto 186px;
  border: 1px solid var(--border-light-grey);

  @media screen and (min-width: 550px) {
    padding: 20px 25px;
  }

  @media screen and (min-width: 750px) {
    background-position: calc(100% + 345px) 50%;
    background-size: auto 291px;
    min-height: 250px;
  }

  @media screen and (min-width: 850px) {
    background-position: center;
  }
`;

const Header = styled.span`
  font-family: 'Uni Sans', sans-serif;
  font-weight: 700;
  font-size: 28px;

  @media screen and (min-width: 750px) {
    font-size: 41px;
  }
`;

const Para = styled.p`
  font-family: 'Uni Sans Book', sans-serif;
  margin-top: 4px;
  margin-bottom: 10px;
  width: 45%;
  font-size: 17px;

  @media screen and (min-width: 750px) {
    font-size: 19px;
    width: 35%;
  }
`;

const Logo = styled.img`
  position: absolute;
  width: 93px;
  height: 73px;
  right: 25px;
  top: 25px;
`;

const StyledLink = styled.a`
  display: inline-block;
  font-weight: 700;
  font-size: 0.7rem;
  text-decoration: none;
  color: white;
  padding: 12px 14px;
  margin-bottom: 5px;
  background: linear-gradient(to top, #858484, #a0a0a0);

  &:hover {
    background: linear-gradient(to top, #858484, #737373);
  }

  @media screen and (min-width: 750px) {
    font-size: 0.8rem;
  }
`;

const BlueStrip = styled.div`
  background-image: url(${hex});
  height: 25px;
  width: 100%;
  background-size: 1280px 1694px;
  background-position: calc(100% + 80px) -1560px;
  position: absolute;
  bottom: 0;
  left: 0;

  @media screen and (min-width: 750px) {
    background-position: right -1566px;
  }
`;

export default function AdvertBanner() {
  const match = useMedia('(min-width: 850px)');
  const match2 = useMedia('(min-width: 530px)');

  return (
    <Container>
      <Header>RTX Studio</Header>
      <Para>The best laptops and desktops for creating anywhere.</Para>
      {match2 && <StyledLink href="">FIND OUT MORE</StyledLink>}
      {match && <Logo src={logo} />}
      <BlueStrip />
    </Container>
  );
}
