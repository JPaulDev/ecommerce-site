import styled from 'styled-components';
import { useId } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg';
import Icon from './Icon';

const Form = styled.form`
  flex: 1;
`;

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  min-height: 45px;
  font-size: 1.2rem;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 45px;
  outline: none;
  border: 2px solid white;
  transition: border 200ms ease-in-out;

  &:focus {
    border: 2px solid #ff9110;
  }
  &&::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const Button = styled.button`
  display: flex;
  background-color: transparent;
  position: absolute;
  right: 0;
  cursor: pointer;
  border: none;
  padding-right: 6px;
`;

function SearchInput() {
  const id = useId();

  return (
    <Form>
      <Container>
        <label id={id} hidden>
          Search
        </label>
        <Input
          id={id}
          placeholder="Search for products..."
          spellCheck="false"
          autoComplete="off"
          maxLength="50"
        />
        <Button title="Search" type="submit">
          <Icon icon={SearchIcon} width="33px" />
        </Button>
      </Container>
    </Form>
  );
}

export default SearchInput;
