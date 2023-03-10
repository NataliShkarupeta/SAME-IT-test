import { Wrap, Span, P } from './InfoBlock.styled';
import { selectOders } from 'redux/orders/ordersSelectors';
import { useSelector } from 'react-redux';

export const InfoBlock = () => {
  const order = useSelector(selectOders);
   console.log('order=>', order);
 
  return (
    <Wrap>
      <P>
        Номер ТТН: <Span>{order && order.Number}</Span>
      </P>
      <P>Статус доставки: {order && order.Status}</P>
      <P>Відправлено: {order && order.WarehouseRecipientAddress}</P>
      <P>Отримано: {order && order.WarehouseSenderAddress}</P>
    </Wrap>
  );
};
