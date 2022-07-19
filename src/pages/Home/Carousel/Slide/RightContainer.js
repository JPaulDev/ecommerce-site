import styled from 'styled-components';

const Container = styled.div`
  width: 30%;
  color: ${(props) => props.color};
`;

export default function RightContainer({ children }) {
  return <Container>{children}</Container>;
}
