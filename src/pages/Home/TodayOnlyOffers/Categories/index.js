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
    title: 'Graphics Cards',
    icon: gfxIcon,
  },
  {
    id: uniqid(),
    title: 'Memory',
    icon: memoryIcon,
  },
  {
    id: uniqid(),
    title: 'Hard Drives',
    icon: hddIcon,
  },
  {
    id: uniqid(),
    title: 'Processors',
    icon: processorIcon,
  },
  {
    id: uniqid(),
    title: 'Motherboards',
    icon: motherboardIcon,
  },
];

export default function Categories({ onChange }) {
  return (
    <Container>
      <List>
        {categories.map((category) => (
          <li key={category.id}>
            <Button
              category={category}
              onChange={() => onChange(category.title)}
            />
          </li>
        ))}
      </List>
    </Container>
  );
}
