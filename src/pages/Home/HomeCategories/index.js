import uniqid from 'uniqid';
import { ReactComponent as laptopIcon } from '../../../assets/svg/laptop.svg';
import { ReactComponent as gfxIcon } from '../../../assets/svg/gfx.svg';
import { ReactComponent as hddIcon } from '../../../assets/svg/hdd.svg';
import { ReactComponent as processorIcon } from '../../../assets/svg/processor.svg';
import { ReactComponent as monitorIcon } from '../../../assets/svg/monitor.svg';
import Container from './Container';
import Link from './Link';
import Icon from './Icon';
import Text from './Text';

const content = [
  {
    id: uniqid(),
    title: 'Laptops',
    icon: laptopIcon,
    url: '',
  },
  {
    id: uniqid(),
    title: 'Graphics Cards',
    icon: gfxIcon,
    url: '',
  },
  {
    id: uniqid(),
    title: 'Hard Drives',
    icon: hddIcon,
    url: '',
  },
  {
    id: uniqid(),
    title: 'Processors',
    icon: processorIcon,
    url: '',
  },
  {
    id: uniqid(),
    title: 'Monitors',
    icon: monitorIcon,
    url: '',
  },
];

function HomeCategories() {
  return (
    <Container>
      {content.map((item) => (
        <Link key={item.id} url={item.url}>
          <Icon componentIcon={item.icon} />
          <Text>{item.title}</Text>
        </Link>
      ))}
    </Container>
  );
}

export default HomeCategories;
