import styled from 'styled-components';

const Div = styled.div`
  min-width: 285px;
  column-gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: var(--background-grey);
  z-index: ${(props) => (props.active ? '10' : '0')};
  opacity: ${(props) => (props.active ? '1' : '0')};
  transition: opacity 800ms ease-in-out;

  @media screen and (min-width: 1000px) {
    min-width: initial;
    transition: initial;
    position: initial;
    opacity: 1;
  }
`;

export default function InnerContainer({ children, active }) {
  return <Div active={active}>{children}</Div>;
}
