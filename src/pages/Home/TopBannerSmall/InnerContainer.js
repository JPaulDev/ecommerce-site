import styled from 'styled-components';

const Div = styled.div`
  column-gap: 15px;
  display: flex;
  align-items: center;
  position: absolute;
  opacity: ${(props) => (props.active ? '1' : '0')};

  @media screen and (min-width: 850px) {
    position: initial;
    opacity: 1;
  }
`;

function InnerContainer({ children, active }) {
  return <Div active={active}>{children}</Div>;
}

export default InnerContainer;
