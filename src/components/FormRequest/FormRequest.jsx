import { Form, Input, Button } from './FormRequest.styled';
import { useDispatch } from 'react-redux';
import { fetchLocationOrder } from 'redux/orders/ordersOperations';
import { useState } from 'react';

export const FormRequest = () => {
  const [num, setNut] = useState('');

  const dispatch = useDispatch();

  const takeInputValue = ({ target }) => {
    const number = target.value.replace(/\D+/g, '');
    setNut(number);
  };

  const getInfo = e => {
    e.preventDefault();
    if (num.length < 14) {
      alert(`Введінь номер ТТН коректно-має бути 14 цифр`);
    }else if((num.length > 14) ){
      alert(`Введінь номер ТТН коректно-має бути 14 цифр`);
    }
     else {
      dispatch(fetchLocationOrder(num));
      setNut('');
    }
  };
  return (
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
  );
};
