import styled from 'styled-components';

const Header = styled.h4`
  font-weight: 400;
  color: var(--text-dark);
  font-size: 0.75rem;

  &:hover {
    color: var(--text-hover-grey);
  }

  @media screen and (min-width: 640px) {
    font-size: 0.84rem;
  }
`;

export default function Text({ children }) {
  return <Header>{children}</Header>;
}
