import styled from 'styled-components';
import TopBanner from './TopBanner';
import Carousel from './Carousel';
import ProShopCards from './ProShopCards';
import TodayOnlyBanner from './TodayOnlyBanner';
import AdvertBanner from './AdvertBanner';
import TodayOnlyOffers from './TodayOnlyOffers';

const Main = styled.main`
  max-width: 1280px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  max-width: 1294px;
  overflow: hidden;
  margin: 0 auto;
`;

export default function Home() {
  return (
    <Wrapper>
      <Main>
        <TopBanner />
        <Carousel />
        <ProShopCards />
        <AdvertBanner />
        <TodayOnlyBanner />
        <TodayOnlyOffers />
      </Main>
    </Wrapper>
  );
}
