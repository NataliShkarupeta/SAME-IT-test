
import { Ul, Li, AllRequestsLink } from './AllRequests.styled';

export const AllRequests = () => {
  return (
    <Ul>
      <Li>
        <AllRequestsLink to="/weather">
          {' '}
          <p>Погода</p>
        </AllRequestsLink>
      </Li>
      <Li>
        <AllRequestsLink to="/news">
          <p>Новини</p>
        </AllRequestsLink>
      </Li>
      <Li>
        <AllRequestsLink to="/horoscope">
          <p>Гороскоп</p>
        </AllRequestsLink>
      </Li>
      {/* <Li>
        <AllRequestsLink to='/food'>
          <p>Їжа</p>
        </AllRequestsLink>
      </Li> */}
      <Li>
        <AllRequestsLink to="/health">
          {' '}
          <p>Здоровʼє</p>
        </AllRequestsLink>
      </Li>

      <AllRequestsLink to='/orders'>
        {' '}
        <p>Замовлення</p>
      </AllRequestsLink>
    </Ul>
  );
};
