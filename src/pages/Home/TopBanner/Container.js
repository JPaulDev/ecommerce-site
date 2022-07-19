import styled from 'styled-components';

const Div = styled.div`
  min-height: 52px;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--background-grey);
`;

export default function Container({ children }) {
  return <Div>{children}</Div>;
}
