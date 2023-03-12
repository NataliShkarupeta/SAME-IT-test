import { Form, Input, Button } from './FormRequest.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocationOrder } from 'redux/orders/ordersOperations';
import { useState } from 'react';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectOrdersError } from 'redux/orders/ordersSelectors';


export const FormRequest = ({ numberForInput }) => {
  const [num, setNut] = useState(numberForInput);
  const dispatch = useDispatch();
  const error = useSelector(selectOrdersError);

  const takeInputValue = ({ target }) => {
    const number = target.value.replace(/\D+/g, '');
    setNut(number);
  };

  const getInfo = e => {
    e.preventDefault();
    if (num.length < 14) {
      toast.info(`Введіть номер ТТН коректно-має бути 14 цифр`);
    } else if (num.length > 14) {
      toast.info(`Введіть номер ТТН коректно-має бути 14 цифр`);
    } else {
      dispatch(fetchLocationOrder(num));
        if (error) {
          toast.error(`Щось пішло не так, спробуйте ще`);
        }
      setNut('');
    }
  };
  return (
    <>
      <ToastContainer
        transition={Zoom}
        draggable={false}
        position="top-center"
      />
      <Form onSubmit={getInfo}>
        <label>
          <Input
            placeholder="Номер накладної має складатися з 14 цифр"
            onChange={takeInputValue}
            value={num}
          />
        </label>
        <Button type="submit">Отримати дані</Button>
      </Form>
    </>
  );
};
