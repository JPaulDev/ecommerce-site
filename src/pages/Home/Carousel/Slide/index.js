import useMedia from '../../../../hooks/useMedia';
import Container from './Container';
import CenterImage from './CenterImage';
import LeftContainer from './LeftContainer';
import LeftLogo from './LeftLogo';
import LeftHeader from './LeftHeader';
import LeftText from './LeftText';
import RightContent from './RightContent';

export default function Slide({ slide }) {
  const match = useMedia('(min-width: 1000px)');

  return (
    <Container background={slide.background}>
      <LeftContainer>
        <LeftLogo image={slide.leftLogo} />
        <LeftHeader>{slide.leftHeader}</LeftHeader>
        <LeftText>{slide.leftText}</LeftText>
      </LeftContainer>
      <CenterImage image={slide.centerImage} />
      {match && (
        // <RightContainer>
        //   <RightHeader>
        //     {slide.rightHeader}
        //     <RightLogo image={slide.rightLogo} />
        //   </RightHeader>
        //   <RightText rightText={slide.rightText} />
        // </RightContainer>
        <RightContent slide={slide} />
      )}
    </Container>
  );
}
