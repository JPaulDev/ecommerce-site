import styled from 'styled-components';

const Image = styled.img`
  width: 325px;
  height: 275px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 180px;

  @media screen and (min-width: 700px) {
    transform: translateX(-10%);
    top: 100px;
  }

  @media screen and (min-width: 850px) {
    width: 350px;
    height: 296px;
    top: 90px;
    right: 110px;
    left: initial;
    transform: initial;
  }

  @media screen and (min-width: 1000px) {
    width: 325px;
    height: 275px;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 1100px) {
    width: 375px;
    height: 317px;
    top: 80px;
  }
`;

export default function CenterImage({ image }) {
  return <Image src={image} />;
}
