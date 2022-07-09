import styled from 'styled-components';
import img from '../TodaysOffers/today.png';

const Container = styled.div`
  width: 100%;
  min-height: 90px;
  margin-top: 100px;
  display: flex;
  column-gap: 30px;
  align-items: center;
  background-color: white;
`;

const Header = styled.h3`
  font-size: 1.6rem;
  line-height: 1.6rem;
`;

const LeftHeader = styled.h3`
  color: white;
  font-size: 1.9rem;
  line-height: 1.9rem;
  font-weight: bold;
  padding: 25px 30px;
  background-image: url(${img});
  background-position: -54px;
  background-repeat: no-repeat;
`;

function TodayOnlyBanner() {
  return (
    <Container>
      <LeftHeader>TODAY ONLY</LeftHeader>
      <Header>Fantastic offers, updated every weekday!</Header>
    </Container>
  );
}

export default TodayOnlyBanner;
