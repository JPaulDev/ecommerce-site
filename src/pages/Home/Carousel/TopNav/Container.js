import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 10;
  background: rgba(83, 83, 83, 0.8);
  border-bottom: 1px solid #8e8e8e;
`;

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}
