import styled from 'styled-components';

const Div = styled.div`
  display: none;
  position: absolute;
  width: 300px;
  height: 190px;
  left: -80px;
  border-radius: 50%;

  @media screen and (min-width: 925px) {
    display: initial;
    background: linear-gradient(to right, #c12134, #da2141);
  }
`;

function RedDetail() {
  return <Div />;
}

export default RedDetail;
