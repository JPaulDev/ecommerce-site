import uniqid from 'uniqid';
import { ReactComponent as memoryIcon } from '../../../../assets/svg/memory.svg';
import { ReactComponent as gfxIcon } from '../../../../assets/svg/gfx.svg';
import { ReactComponent as hddIcon } from '../../../../assets/svg/hdd.svg';
import { ReactComponent as processorIcon } from '../../../../assets/svg/processor.svg';
import { ReactComponent as motherboardIcon } from '../../../../assets/svg/motherboard.svg';
import Container from './Container';
import List from './List';
import Button from './Button';

const categories = [
  {
    id: uniqid(),
    category: 'Graphics Cards',
    icon: gfxIcon,
  },
  {
    id: uniqid(),
    category: 'Memory',
    icon: memoryIcon,
  },
  {
    id: uniqid(),
    category: 'Hard Drives',
    icon: hddIcon,
  },
  {
    id: uniqid(),
    category: 'Processors',
    icon: processorIcon,
  },
  {
    id: uniqid(),
    category: 'Motherboards',
    icon: motherboardIcon,
  },
];

export default function HomeCategories({ onChange }) {
  return (
    <Container>
      <List>
        {categories.map((item) => (
          <li key={item.id}>
            <Button item={item} onChange={() => onChange(item.category)} />
          </li>
        ))}
      </List>
    </Container>
  );
}
