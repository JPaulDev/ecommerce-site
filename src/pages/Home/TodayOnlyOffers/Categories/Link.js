import styled from 'styled-components';

const StyledLink = styled.button`
  min-width: 85px;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  text-decoration: none;

  @media screen and (min-width: 640px) {
    min-width: 95px;
  }
`;

export default function Link({ children, onChange }) {
  return <StyledLink onClick={onChange}>{children}</StyledLink>;
}
