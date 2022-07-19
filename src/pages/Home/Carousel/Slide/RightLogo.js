import styled from 'styled-components';

const Image = styled.img`
  display: inline-block;
  margin-left: 15px;
`;

export default function RightLogo({ image }) {
  return <Image src={image} />;
}
