import styled from 'styled-components';

const Image = styled.img`
  width: 325px;
  height: 275px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 170px;

  @media screen and (min-width: 700px) {
    transform: translateX(-10%);
    top: 100px;
  }

  @media screen and (min-width: 1000px) {
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
