import {
  Wrap,
  TakeHistory,
  CircleButton,
  Li,
  Ul,
} from './HistoryOrders.styled';
import { selectInvoiceList } from 'redux/invoiceList/invoiceListSelectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchLocationOrder } from 'redux/orders/ordersOperations';
import { fetchInvoiceList } from 'redux/invoiceList/invoiceListOperations';
import { FaTrashAlt } from 'react-icons/fa';
import { deleteOrder } from 'redux/invoiceList/invoiceListOperations';
import { Rings } from 'react-loader-spinner';
import { selectInvoiceListIsLoading } from 'redux/invoiceList/invoiceListSelectors';

export const HistoryOrders = () => {
  // console.log(setNut);
  const invoiceList = useSelector(selectInvoiceList);
  const isLoading = useSelector(selectInvoiceListIsLoading);
  const dispatch = useDispatch();

  const takeHistory = () => {
    dispatch(fetchInvoiceList());
  };

  console.log('invoiceList', invoiceList);
  return (
    <Wrap>
      <TakeHistory onClick={takeHistory}>
        Отримати номери всіх ТТН в цьому році
      </TakeHistory>
      <p>Історія :</p>
      {isLoading ? (
        <Rings />
      ) : (
        <Ul>
          {invoiceList.map(({ IntDocNumber, Ref }) => (
            <>
              <Li key={IntDocNumber}>
                <span
                  onClick={() => dispatch(fetchLocationOrder(IntDocNumber))}
                >
                  {IntDocNumber}
                </span>
                <CircleButton onClick={() => dispatch(deleteOrder(Ref))}>
                  <FaTrashAlt color="white" />
                </CircleButton>
              </Li>
            </>
          ))}
        </Ul>
      )}
    </Wrap>
  );
};
