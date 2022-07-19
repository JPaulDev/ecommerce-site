import styled from 'styled-components';

const Image = styled.img`
  margin-top: 10px;
  display: inline-block;
  width: 125px;

  @media screen and (min-width: 700px) {
    width: 158px;
  }
`;

export default function LeftLogo({ image }) {
  return <Image src={image} />;
}
