import styled from 'styled-components';

const Container = styled.div`
  color: white;
  text-align: center;

  @media screen and (min-width: 700px) {
    width: 40%;
    text-align: left;
  }

  @media screen and (min-width: 1000px) {
    width: 30%;
  }
`;

const Header = styled.span`
  font-family: 'Uni Sans', sans-serif;
  font-weight: 700;
  font-size: 1.93rem;
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;

  @media screen and (min-width: 700px) {
    margin-top: 15px;
    margin-bottom: 8px;
  }
`;

const Image = styled.img`
  margin-top: 10px;
  width: 125px;
  height: 15px;

  @media screen and (min-width: 700px) {
    width: 158px;
    height: 19px;
  }
`;

const Text = styled.p`
  font-size: 0.88rem;
`;

export default function LeftContent({ slide }) {
  return (
    <Container>
      <Image src={slide.leftLogo} />
      <Header>{slide.leftHeader}</Header>
      <Text>{slide.leftText}</Text>
    </Container>
  );
}
