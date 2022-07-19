import styled from 'styled-components';

const Container = styled.div`
  width: 30%;
  color: ${(props) => props.color};
`;

const Header = styled.span`
  font-family: 'Uni Sans', sans-serif;
  font-weight: 600;
  font-size: 20px;
  display: block;
  margin-left: 11px;
`;

const Image = styled.img`
  display: inline-block;
  margin-left: 15px;
`;

const List = styled.ul`
  font-size: 14px;
  padding: 12px 0 0 15px;
`;

const ListItem = styled.li`
  padding: 5px 0;
`;

export default function RightContent({ slide }) {
  return (
    <Container>
      <Header>
        {slide.rightHeader}
        <Image src={slide.rightLogo} />
      </Header>
      <List>
        {slide.rightText.map((text) => (
          <ListItem>{text}</ListItem>
        ))}
      </List>
    </Container>
  );
}
