import styled from 'styled-components';

const Header = styled.h4`
  font-weight: normal;
  color: var(--text-dark);
  font-size: 0.75rem;

  &:hover {
    color: var(--text-hover-grey);
  }

  @media screen and (min-width: 640px) {
    font-size: 0.84rem;
  }
`;

function Text({ children }) {
  return <Header>{children}</Header>;
}

export default Text;
