import styled from 'styled-components';

const List = styled.ul`
  font-size: 14px;
  padding: 12px 0 0 15px;
`;

const ListItem = styled.li`
  padding: 5px 0;
`;

export default function RightText({ rightText }) {
  return (
    <List>
      {rightText.map((text) => (
        <ListItem>{text}</ListItem>
      ))}
    </List>
  );
}
