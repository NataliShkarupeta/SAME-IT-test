import { Form, Input, Button } from './FormRequest.styled';
import { useDispatch } from 'react-redux';
import { fetchLocationOrder } from 'redux/orders/ordersOperations';
import { useState } from 'react';

export const FormRequest = () => {
  const [num, setNut] = useState('');

  const dispatch = useDispatch();

  const takeInputValue = ({ target }) => {
    setNut(target.value);
  };

  const getInfo = e => {
    e.preventDefault();
    if (num.length < 14) {
      alert(`Введінь номер ТТН коректно-має бути 14 цифр`);
    } else {
      dispatch(fetchLocationOrder(num));
      setNut('');
    }
  };
  return (
    <Form onSubmit={getInfo}>
      <label>
        <Input
          placeholder="Номер накладної має складатися з 14 цифр"
          type="number"
          //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={takeInputValue}
          value={num}
          required
        />
      </label>
      <Button type="submit">Отримати дані</Button>
    </Form>
  );
};
