/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import uniqid from 'uniqid';
import useCarousel from '../../../hooks/useCarousel';
import useMedia from '../../../hooks/useMedia';
import NavArrow from './NavArrow';
import NavDots from './NavDots';
import xsLogo from './3xs-logo.webp';
import nvidiaBackground from './nvidia-background.webp';
import intelBackground from './intel-background.webp';
import amdBackground from './amd-background.webp';
import monthBackground from './month-background.webp';
import nvidiaPc from './nvidia-pc.webp';
import intelPc from './intel-pc.webp';
import monthPc from './month-pc.webp';
import amdPc from './amd-pc.webp';
import nvidiaLogo from './nvidia-logo.webp';
import intelLogo from './intel-logo.webp';
import amdLogo from './amd-logo.webp';
import monthLogos from './month-logos.webp';

const content = [
  {
    id: uniqid(),
    background: nvidiaBackground,
    centerImage: nvidiaPc,
    leftLogo: xsLogo,
    leftHeader: 'RTX™ 30 Series PCs',
    leftText: `Custom built PCs built with NVIDIA's 2nd gen Ampere architecture,
      designed to deliver ultimate performance for gamers and creators.`,
    rightHeader: 'Powered by',
    rightLogo: nvidiaLogo,
    textColor: 'black',
    rightText: [
      'Premium built to order systems',
      'Extensively tested',
      '7 day evening and weekend support',
      'Premium 3 year warranty',
      'Best in-class components',
      'Award-winning systems',
    ],
  },
  {
    id: uniqid(),
    background: intelBackground,
    centerImage: intelPc,
    leftLogo: xsLogo,
    leftHeader: 'Upgrade to 12\u1D57\u02B0 Gen Intel',
    leftText: `Level-up your PC and hardware for the maximum performance boost,
      powered by 12th Gen Intel® Core™ CPUs, with support for PCIe 5.0 graphics
      and DDR5 memory`,
    rightHeader: 'Powered by',
    rightLogo: intelLogo,
    textColor: 'black',
    rightText: [
      'Premium built to order systems',
      'Extensively tested',
      '7 day evening and weekend support',
      'Premium 3 year warranty',
      'Best in-class components',
      'Award-winning systems',
    ],
  },
  {
    id: uniqid(),
    background: amdBackground,
    centerImage: amdPc,
    leftLogo: xsLogo,
    leftHeader: 'AMD Powered Gaming',
    leftText: `3XS Gaming PCs powered by AMD Ryzen & Radeon, designed and built
      with zero compromises.`,
    rightHeader: 'Powered by',
    rightLogo: amdLogo,
    textColor: 'white',
    rightText: [
      'Premium built to order systems',
      'Extensively tested',
      '7 day evening and weekend support',
      'Premium 3 year warranty',
      'Best in-class components',
      'Award-winning systems',
    ],
  },
  {
    id: uniqid(),
    background: monthBackground,
    centerImage: monthPc,
    leftLogo: xsLogo,
    leftHeader: 'PC of the Month',
    leftText: `Our best deal this month, save £100 when you level-up your gaming
      with the 3XS Gamer PBA powered by RTX 3060 Ti`,
    rightHeader: 'Powered by',
    rightLogo: monthLogos,
    textColor: 'black',
    rightText: [
      '8GB ASUS GeForce RTX 3060',
      'Intel Core i5 12400F or AMD Ryzen 5 5600X',
      'iCUE programmable RGB lighting',
      'Extensively tested',
      'Award-winning systems',
      '3 year warranty',
    ],
  },
];

const Section = styled.section`
  width: 100%;
  margin: 15px auto;
  position: relative;
  max-width: 1800px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background-color: black;
`;

const Inner = styled.div`
  position: relative;
  float: left;
  margin-right: -100%;
  width: 100%;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  padding: 10px 20px 0 20px;
  min-height: 450px;
  background-position: calc(100% + 383px) calc(50% + 20px);
  column-gap: 30px;

  @media screen and (min-width: 550px) {
    padding: 10px 60px 0 60px;
  }

  @media screen and (min-width: 700px) {
    display: flex;
    padding: 45px 60px 0 60px;
    min-height: 350px;
  }

  @media screen and (min-width: 1000px) {
    background-position: center calc(50% + 20px);
    justify-content: space-between;
  }
`;

const CenterImage = styled.img`
  width: 325px;
  height: 275px;

  @media screen and (min-width: 1000px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 45px;
  }

  @media screen and (min-width: 1100px) {
    width: 375px;
    height: 317px;
    top: 25px;
  }
`;

const LeftBlock = styled.div`
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

const RightBlock = styled.div`
  width: 30%;
  color: ${(props) => props.color};
`;

const LeftImage = styled.img`
  margin-top: 10px;
  display: inline-block;
  width: 125px;

  @media screen and (min-width: 700px) {
    width: 158px;
  }
`;

const ImageRight = styled.img`
  display: inline-block;
  margin-left: 15px;
`;

const Text = styled.p`
  font-size: 14px;
`;

const LeftHeader = styled.span`
  font-family: 'Uni Sans';
  font-weight: 700;
  font-size: 31px;
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;

  @media screen and (min-width: 700px) {
    margin-top: 18px;
    margin-bottom: 10px;
  }
`;

const RightHeader = styled.span`
  font-family: 'Uni Sans';
  font-weight: 600;
  font-size: 20px;
  display: block;
  margin-left: 11px;
`;

const List = styled.ul`
  font-size: 14px;
  padding: 12px 0 0 18px;
`;

const ListItem = styled.li`
  padding: 5px 0;
`;

export default function Carousel() {
  const match = useMedia('(min-width: 1000px)');
  const [previous, current, moveLeft, handleChange] = useCarousel({
    length: content.length,
    interval: 500000,
    transitionTime: 1100,
  });

  return (
    <Section>
      <NavArrow direction="prev" onChangeSlide={() => handleChange('prev')} />
      <NavArrow direction="next" onChangeSlide={() => handleChange('next')} />
      {content.map((item, index) => (
        <Fragment key={item.id}>
          {index === previous && (
            <motion.div
              initial={{ translateX: '0%' }}
              animate={{ translateX: moveLeft ? '-100%' : '100%' }}
              transition={{ ease: 'easeInOut', duration: 1 }}
            >
              <Inner key={item.id} background={item.background}>
                <LeftBlock>
                  <LeftImage src={item.leftLogo} />
                  <LeftHeader>{item.leftHeader}</LeftHeader>
                  <Text>{item.leftText}</Text>
                </LeftBlock>
                <CenterImage src={item.centerImage} />
                {match && (
                  <RightBlock color={item.textColor}>
                    <RightHeader>
                      {item.rightHeader}
                      <ImageRight src={item.rightLogo} />
                    </RightHeader>
                    <List>
                      {item.rightText.map((text) => (
                        <ListItem>{text}</ListItem>
                      ))}
                    </List>
                  </RightBlock>
                )}
              </Inner>
            </motion.div>
          )}
          {index === current && (
            <motion.div
              initial={{ translateX: moveLeft ? '100%' : '-100%' }}
              animate={{ translateX: '0%' }}
              transition={{ ease: 'easeInOut', duration: 1 }}
            >
              <Inner key={item.id} background={item.background}>
                <LeftBlock>
                  <LeftImage src={item.leftLogo} />
                  <LeftHeader>{item.leftHeader}</LeftHeader>
                  <Text>{item.leftText}</Text>
                </LeftBlock>
                <CenterImage src={item.centerImage} />
                {match && (
                  <RightBlock color={item.textColor}>
                    <RightHeader>
                      {item.rightHeader}
                      <ImageRight src={item.rightLogo} />
                    </RightHeader>
                    <List>
                      {item.rightText.map((text) => (
                        <ListItem>{text}</ListItem>
                      ))}
                    </List>
                  </RightBlock>
                )}
              </Inner>
            </motion.div>
          )}
        </Fragment>
      ))}
      <NavDots
        length={content.length}
        current={current}
        onChange={handleChange}
      />
    </Section>
  );
}
