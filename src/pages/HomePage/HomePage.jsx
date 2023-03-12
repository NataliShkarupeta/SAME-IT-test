import { FormRequest } from 'components/FormRequest/FormRequest';
import { InfoBlock } from 'components/InfoBlock/InfoBlock';
import { HistoryOrders } from 'components/HistoryOrders/HistoryOrders';
import { Wrap, WrapBlock } from './HomePage.styled';
import { useState } from 'react';

export const HomePage = () => {
  const [number, setNumber] = useState();

  const saveNumber = num => {
    setNumber(num);
  };

  return (
    <Wrap>
      {number ? (
        <FormRequest numberForInput={number} />
      ) : (
        <FormRequest numberForInput={''} />
      )}

      <WrapBlock>
        <InfoBlock />
        <HistoryOrders saveNumber={saveNumber} />
      </WrapBlock>
    </Wrap>
  );
};
