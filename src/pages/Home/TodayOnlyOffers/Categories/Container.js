import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 15px;
  background-color: white;
  border: 1px solid var(--border-light-grey);
`;

const StyledContainer = styled.div`
  width: 98%;
  max-width: 1500px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0;
  margin: 0 auto;
`;

export default function Container({ children }) {
  return (
    <Wrapper>
      <StyledContainer>{children}</StyledContainer>
    </Wrapper>
  );
}
