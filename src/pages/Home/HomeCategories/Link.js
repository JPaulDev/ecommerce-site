import styled from 'styled-components';

const StyledLink = styled.a`
  min-width: 85px;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  text-decoration: none;

  @media screen and (min-width: 640px) {
    min-width: 95px;
  }
`;

function Link({ children, url }) {
  return <StyledLink href={url}>{children}</StyledLink>;
}

export default Link;
