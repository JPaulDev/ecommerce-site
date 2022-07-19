import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  float: left;
  margin-right: -100%;
  width: 100%;
  background-image: linear-gradient(to right, #00000080, #00000030),
    url(${(props) => props.background});
  background-repeat: no-repeat;
  padding: 10px 20px 0 20px;
  min-height: 450px;
  background-position: center, calc(100% + 383px) calc(50%);
  column-gap: 30px;

  @media screen and (min-width: 550px) {
    padding: 10px 60px 0 60px;
  }

  @media screen and (min-width: 700px) {
    display: flex;
    padding: 91px 60px 0 60px;
    min-height: 381px;
    background-image: url(${(props) => props.background});
    background-position: calc(100% + 383px) calc(50% + 20px);
  }

  @media screen and (min-width: 1000px) {
    background-position: center calc(50% + 20px);
    justify-content: space-between;
  }
`;

export default function Container({ children, background }) {
  return <StyledContainer background={background}>{children}</StyledContainer>;
}
