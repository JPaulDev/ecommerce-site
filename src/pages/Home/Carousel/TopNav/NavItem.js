import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Uni Sans', sans-serif;
  font-weight: 600;
  font-size: 0.83rem;
  padding: 16px 20px 12px 20px;
  cursor: pointer;
  background: none;
  border: none;
  color: ${(props) => (props.active ? 'white' : '#b9b9b9')};
  transform: ${(props) => props.active && 'scale(1.03)'};
  border-bottom: ${(props) => props.active && '3px solid var(--main-orange)'};
`;

export default function NavItem({ children, active, onChangeSlide }) {
  return (
    <li>
      <Button active={active} onClick={onChangeSlide}>
        {children}
      </Button>
    </li>
  );
}
