import styled from 'styled-components';
import uniqid from 'uniqid';
import useMedia from '../../../hooks/useMedia';
import proGaming from './pro-gaming.webp';
import proGraphics from './pro-graphics.webp';
import proAudio from './pro-audio.webp';
import proVideo from './pro-video.webp';
import proAi from './pro-ai.webp';
import proSignage from './pro-signage.webp';
import proLogos from './pro-logos.webp';

const content = [
  {
    id: uniqid(),
    image: proGaming,
    logoPosition: '-170px',
    text: 'The fastest gaming PCs - plus a huge range of peripherals for the ultimate gaming experience.',
    linkText: 'VISIT GAMING STORE',
    url: '',
  },
  {
    id: uniqid(),
    image: proGraphics,
    logoPosition: '-510px',
    text: 'Workstations and servers for graphics-intensive workflows such as AEC & BIM, CAD & CAE and M & E.',
    linkText: 'VISIT GRAPHICS STORE',
    url: '',
  },
  {
    id: uniqid(),
    image: proAudio,
    logoPosition: '0',
    text: 'Computer based music and audio production - plus the best in music technology and instruments.',
    linkText: 'VISIT AUDIO STORE',
    url: '',
  },
  {
    id: uniqid(),
    image: proVideo,
    logoPosition: '-340px',
    text: 'Film and broadcast equipment, workstations for professional video and media production workflows.',
    linkText: 'VISIT VIDEO STORE',
    url: '',
  },
  {
    id: uniqid(),
    image: proSignage,
    headerText: 'Digital Signage Solutions',
    text: 'Reinvent the way you engage with customers with solutions that provide invaluable insights and customer data.',
    linkText: 'VIEW SIGNAGE SOLUTIONS',
    url: '',
  },
  {
    id: uniqid(),
    image: proAi,
    headerText: 'Deep Learning & AI',
    text: 'Desktop, datacentre and cloud solutions for developing and deploying deep learning and AI models.',
    linkText: 'FIND OUT MORE',
    url: '',
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 15px;
  padding: 3px;
  background-color: white;
  border: 1px solid var(--border-light-grey);

  @media screen and (min-width: 780px) {
    flex-direction: row;
  }
`;

const Card = styled.div`
  min-height: 125px;
  padding-left: 25px;
  padding-top: 25px;
  background-color: #f1f1f1;
  background-image: url(${(props) => props.image});
  background-position: right;
  background-repeat: no-repeat;

  @media screen and (min-width: 780px) {
    min-height: 140px;
  }

  @media screen and (min-width: 996px) {
    min-height: 175px;
  }
`;

const Wrapper = styled.div`
  padding: 3px;

  @media screen and (min-width: 780px) {
    width: 50%;
  }
`;

const ProLogo = styled.div`
  width: 170px;
  height: 18px;
  background-image: url(${proLogos});
  background-repeat: no-repeat;
  background-position: ${(props) => props.logoPosition} 0;
`;

const Span = styled.span.attrs({ className: 'material-icons' })`
  font-size: 21px;
  color: white;
  border-radius: 50%;
  margin-left: 10px;
  background-color: var(--text-dark-grey);
`;

const Text = styled.p`
  color: var(--text-dark-grey);
  font-size: 0.9rem;
  margin-top: 10px;
  width: 60%;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--text-dark-grey);
  font-size: 0.9rem;
  font-weight: 700;
  margin-top: 10px;
`;

const HeaderText = styled.span`
  font-family: 'Uni Sans Book';
  color: #0072bc;
  font-size: 1.7rem;
  line-height: 1.3rem;
`;

export default function ProShopCards() {
  const match = useMedia('(min-width: 996px)');

  return (
    <Container>
      {content.map((item) => (
        <Wrapper key={item.id}>
          <Card image={item.image}>
            {item.logoPosition ? (
              <ProLogo logoPosition={item.logoPosition} />
            ) : (
              <HeaderText>{item.headerText}</HeaderText>
            )}
            {match && <Text>{item.text}</Text>}
            <Link href={item.url}>
              {item.linkText}
              <Span>chevron_right</Span>
            </Link>
          </Card>
        </Wrapper>
      ))}
    </Container>
  );
}
