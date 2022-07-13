import styled from 'styled-components';
import { useId } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg';

const Form = styled.form`
  flex: 1;

  @media screen and (min-width: 576px) and (max-width: 869px) {
    padding-bottom: 15px;
  }
`;

const StyledIcon = styled(SearchIcon)`
  width: 26px;
  height: auto;
  fill: white;

  @media screen and (min-width: 576px) {
    fill: var(--main-orange);
    width: 34px;
  }
`;

const Container = styled.div`
  width: 100%;
  min-width: 270px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  position: relative;

  @media screen and (min-width: 576px) {
    max-width: 400px;
  }
`;

const Input = styled.input`
  width: 100%;
  min-height: 40px;
  font-size: 1.2rem;
  padding-left: 10px;
  color: var(--text-dark);
  padding-right: 17%;
  outline: none;
  border: 2px solid var(--main-orange);

  &::placeholder {
    color: var(--black-half-transparency);
  }

  @media screen and (min-width: 576px) {
    border: 2px solid white;
    border-radius: 6px;
    padding-right: 45px;
    transition: border 200ms ease-in-out;
    min-height: 45px;

    &:focus {
      border: 2px solid var(--main-orange);
    }
  }
`;

const Button = styled.button`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  cursor: pointer;
  border: none;
  background-color: var(--main-orange);

  @media screen and (min-width: 576px) {
    background-color: transparent;
    padding-right: 7px;
    width: initial;
  }
`;

function SearchInput() {
  const id = useId();

  return (
    <Form>
      <Container>
        <label htmlFor={id} hidden>
          Search for a product
        </label>
        <Input
          id={id}
          placeholder="Search for products..."
          spellCheck="false"
          autoComplete="off"
          maxLength="50"
        />
        <Button title="Search" type="submit">
          <StyledIcon />
        </Button>
      </Container>
    </Form>
  );
}

export default SearchInput;
