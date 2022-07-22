import styled from 'styled-components';

const Container = styled.div`
  width: 30%;
  color: ${(props) => props.textColor};
`;

const Header = styled.span`
  font-family: 'Uni Sans', sans-serif;
  font-weight: 600;
  font-size: 1.3rem;
  margin-left: 10px;
`;

const Image = styled.img`
  margin-left: 15px;
`;

const List = styled.ul`
  font-size: 0.88rem;
  padding: 10px 0 0 18px;
`;

const ListItem = styled.li`
  padding: 5px 0;
`;

export default function RightContent({ slide }) {
  return (
    <Container textColor={slide.textColor}>
      <Header>
        {slide.rightHeader}
        <Image src={slide.rightLogo} />
      </Header>
      <List>
        {slide.rightText.map((text, index) => (
          <ListItem key={index}>{text}</ListItem>
        ))}
      </List>
    </Container>
  );
}
