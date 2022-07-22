import styled from 'styled-components';

const StyledSection = styled.section`
  width: 100%;
  position: relative;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background-color: black;
`;

export default function Section({ children }) {
  return <StyledSection>{children}</StyledSection>;
}
