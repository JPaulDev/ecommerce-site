import styled from 'styled-components';
import { ReactComponent as UserIcon } from '../../assets/icons/basket.svg';
import Icon from './Icon';
import Link from './Link';

const TopLink = styled.a`
  display: block;
  color: white;
  font-size: 1.05rem;
  line-height: 1.05rem;
  text-decoration: none;
`;

function Basket() {
  return (
    <>
      <Icon icon={UserIcon} width="30px" />
      <div>
        <TopLink href="">Basket</TopLink>
        <Link href="">Subtotal £0.00</Link>
      </div>
    </>
  );
}

export default Basket;
