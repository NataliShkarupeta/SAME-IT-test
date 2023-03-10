import { Wrap } from './InfoBlock.styled';
import { selectOders } from 'redux/orders/ordersSelectors';
import { useSelector } from 'react-redux';

export const InfoBlock = () => {
  const order = useSelector(selectOders);
   console.log('order=>', order);
 
  return (
    <Wrap>
      <p>Статус доставки: {order && order.Status}</p>
      <p>Відправлено: {order && order.WarehouseSender}</p>
      <p>Отримано: {order && order.WarehouseRecipient}</p>
    </Wrap>
  );
};
