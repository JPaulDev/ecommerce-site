import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  width: 27px;
  height: 8px;
  border: none;
  margin: 0 3px;
  background: ${(props) => (props.active ? 'var(--main-orange)' : 'white')};
`;

export default function NavItem({ active, onChange }) {
  return (
    <li>
      <Button active={active} onClick={onChange} />
    </li>
  );
}
