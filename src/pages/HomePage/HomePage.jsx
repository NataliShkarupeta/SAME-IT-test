import { FormRequest } from 'components/FormRequest/FormRequest';
import { InfoBlock } from 'components/InfoBlock/InfoBlock';
import { HistoryOrders } from 'components/HistoryOrders/HistoryOrders';
import { Wrap, WrapBlock } from './HomePage.styled';

export const HomePage = () => {
  return (
    <Wrap>
      <FormRequest />
      <WrapBlock>
        <InfoBlock />
        <HistoryOrders />
      </WrapBlock>
    </Wrap>
  );
};
