import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  width: 25px;
  height: 6px;
  border: none;
  margin: 0 2px;
  background: ${(props) => (props.active ? 'var(--main-orange)' : 'white')};
`;

const ListItem = styled.li`
  display: flex;
`;

export default function NavItem({ active, onChangeSlide }) {
  return (
    <ListItem>
      <Button active={active} onClick={onChangeSlide} />
    </ListItem>
  );
}
