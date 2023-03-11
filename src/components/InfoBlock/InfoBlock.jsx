import { Wrap, Span, P, SpanP } from './InfoBlock.styled';
import { selectOders } from 'redux/orders/ordersSelectors';
import { useSelector } from 'react-redux';
import { Rings } from 'react-loader-spinner';
import { selectOrdersIsLoading } from 'redux/orders/ordersSelectors';

export const InfoBlock = () => {
  const order = useSelector(selectOders);
  const isLoading = useSelector(selectOrdersIsLoading);
  console.log('order=>', order);

  return (
    <>
      <Wrap>
        {isLoading ? (
          <Rings />
        ) : (
          <>
            <P>
              <SpanP>Номер ТТН:</SpanP> <Span>{order && order.Number}</Span>
            </P>
            <P>
              <SpanP>Статус доставки:</SpanP>
              {order && order.Status}
            </P>
            <P>
              <SpanP>Відправлено:</SpanP>{' '}
              {order && order.WarehouseRecipientAddress}
            </P>
            <P>
              <SpanP>Отримано:</SpanP> {order && order.WarehouseSenderAddress}
            </P>
          </>
        )}
      </Wrap>
    </>
  );
};
