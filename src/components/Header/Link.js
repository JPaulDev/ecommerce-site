import styled from 'styled-components';

const StyledLink = styled.a`
  font-size: 0.8rem;
  text-decoration: none;
  color: #b3b3b3;
  transition: color 200ms ease-in-out;

  &:hover {
    color: white;
  }
`;

function Link({ children, href }) {
  return <StyledLink href={href}>{children}</StyledLink>;
}

export default Link;
