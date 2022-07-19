import styled from 'styled-components';

const Container = styled.div`
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

export default function LeftContainer({ children }) {
  return <Container>{children}</Container>;
}
