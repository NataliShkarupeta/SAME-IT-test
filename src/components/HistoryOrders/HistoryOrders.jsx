import { Wrap } from "./HistoryOrders.styled";
import { selectInvoiceList } from "redux/invoiceList/invoiceListSelectors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchLocationOrder } from "redux/orders/ordersOperations";

export const HistoryOrders=()=>{
const invoiceList = useSelector(selectInvoiceList);
const dispatch =useDispatch();
console.log('invoiceList', invoiceList);
    return (
      <Wrap>
        <p>Історія</p>
        <ul>
          {' '}
          {invoiceList.map(point => (
            <>
              <li
                onClick={() => dispatch(fetchLocationOrder(point.Number))}
                key={point.Number}
              >
                {' '}
                {point.Number}
              </li>
              <button>Видалити ТТН</button>
            </>
          ))}
        </ul>
      </Wrap>
    );
}