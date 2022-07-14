import styled from 'styled-components';

const Div = styled.div`
  display: none;
  position: absolute;
  width: 300px;
  height: 170px;
  left: -67px;
  border-radius: 50%;

  @media screen and (min-width: 940px) {
    display: initial;
    background: linear-gradient(to right, #c12134, #da2141);
  }
`;

export default function Background() {
  return <Div />;
}
