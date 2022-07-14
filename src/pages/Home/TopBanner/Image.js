import styled from 'styled-components';

const Img = styled.img`
  width: ${(props) => props.width};
  height: auto;
`;

export default function Image({ src, width }) {
  return <Img src={src} width={width} />;
}
