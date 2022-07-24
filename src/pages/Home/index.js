import styled from 'styled-components';
import TopBanner from './TopBanner';
import Carousel from './Carousel';
import ProShopCards from './ProShopCards';
import TodayOnlyBanner from './TodayOnlyBanner';
import AdvertBanner from './AdvertBanner';
import TodayOnlyOffers from './TodayOnlyOffers';

const Main = styled.main`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  background-color: var(--background-grey);
  height: 3000px;

  @media screen and (max-width: 1310px) {
    overflow: hidden;
  }
`;

export default function Home() {
  return (
    <Main>
      <TopBanner />
      {/* <Carousel />
      <ProShopCards />
      <AdvertBanner />
      <TodayOnlyBanner /> */}
      <TodayOnlyOffers />
    </Main>
  );
}
