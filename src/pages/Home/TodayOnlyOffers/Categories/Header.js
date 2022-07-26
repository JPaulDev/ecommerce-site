import styled from 'styled-components';

const StyledHeader = styled.h4`
  font-weight: 600;
  font-size: 0.75rem;
  color: ${(props) => (props.isHovered ? 'var(--text-dark)' : 'var(--text-hover-grey)')};
  transition: color 200ms ease-in-out;

  @media screen and (min-width: 640px) {
    font-size: 0.84rem;
  }
`;

export default function Header({ children, isHovered }) {
  return <StyledHeader isHovered={isHovered}>{children}</StyledHeader>;
}
