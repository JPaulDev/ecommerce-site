import styled from 'styled-components';
import { useMedia } from '../../../hooks/useMedia';

const StyledLink = styled.a`
  display: inline-block;
  font-weight: 700;
  font-size: 0.8rem;
  text-decoration: none;
  color: white;
  padding: 12px 25px;
  margin-bottom: 7px;
  background: linear-gradient(to top, #858484, #a0a0a0);

  &:hover {
    background: linear-gradient(to top, #858484, #737373);
  }

  @media screen and (min-width: 925px) {
    display: flex;
    align-items: center;
    color: black;
    padding: 0;
    margin: 0 0 0 auto;
    background: none;
  }
`;

const Span = styled.span.attrs({ className: 'material-icons' })`
  color: white;
  border-radius: 50%;
  margin-left: 10px;
  background-color: var(--text-dark-grey);
`;

function Link() {
  const match = useMedia('(min-width: 925px)');

  return (
    <StyledLink href="">
      VIEW ALL OFFERS
      {match && <Span>chevron_right</Span>}
    </StyledLink>
  );
}

export default Link;
