import styled from 'styled-components';
import TopBannerSmall from './TopBannerSmall';
import Carousel from './Carousel/Carousel';
import TodayOnlyBanner from './TodaysOffers';

const Main = styled.main`
  width: 98%;
  max-width: 1800px;
  margin: 0 auto;
`;

function Home() {
  return (
    <Main>
      <TopBannerSmall />
      <Carousel />
      <TodayOnlyBanner />
    </Main>
  );
}

export default Home;
