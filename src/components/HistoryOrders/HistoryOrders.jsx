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
import { selectInvoiceListError } from 'redux/invoiceList/invoiceListSelectors';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const HistoryOrders = ({ saveNumber }) => {
  // console.log(setNut);
  const invoiceList = useSelector(selectInvoiceList);
  const isLoading = useSelector(selectInvoiceListIsLoading);
  const error = useSelector(selectInvoiceListError);
  const dispatch = useDispatch();

  const takeHistory = () => {
    dispatch(fetchInvoiceList());
    if (error) {
      toast.error(`Щось пішло не так, спробуйте ще`);
    }
  };

  const saveNumberForInputField = num => {
    dispatch(fetchLocationOrder(num));
    saveNumber(num);
  };

  return (
    <>
      <ToastContainer
        transition={Zoom}
        draggable={false}
        position="top-center"
      />
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
                  <span onClick={() => saveNumberForInputField(IntDocNumber)}>
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
    </>
  );
};
