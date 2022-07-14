import styled from 'styled-components';

const StyledLink = styled.a`
  font-size: 0.8rem;
  text-decoration: none;
  color: var(--link-light-grey);
  transition: color 200ms ease-in-out;

  &:hover {
    color: var(--color-white);
  }
`;

export default function Link({ children, href }) {
  return <StyledLink href={href}>{children}</StyledLink>;
}
