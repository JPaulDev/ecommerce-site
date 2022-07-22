import useMedia from '../../../../hooks/useMedia';
import Container from './Container';
import LeftContent from './LeftContent';
import CenterImage from './CenterImage';
import RightContent from './RightContent';

export default function Slide({ slide }) {
  const match = useMedia('(min-width: 1000px)');

  return (
    <Container background={slide.background}>
      <LeftContent slide={slide} />
      <CenterImage image={slide.centerImage} />
      {match && <RightContent slide={slide} />}
    </Container>
  );
}
