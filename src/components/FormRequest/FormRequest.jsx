import { Form, Input, Button } from './FormRequest.styled';

export const FormRequest = () => {
  return (
    <Form>
      <label>
        <Input
          placeholder="Номер накладної має складатися з 14 цифр"
          type="number"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // onChange={takeInputValue}
          // value={name}
          required
        />
      </label>
      <Button type="submit">Get status TTN</Button>
    </Form>
  );
};
