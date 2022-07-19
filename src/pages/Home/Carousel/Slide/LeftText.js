import styled from 'styled-components';

const StyledText = styled.p`
  font-size: 14px;
`;

export default function Text({ children }) {
  return <StyledText>{children}</StyledText>;
}
