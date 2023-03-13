import { Ul, Li, LiActive } from './AllRequests.styled';

export const AllRequests=()=>{
    return (
      <Ul>
        <Li>
          <p>Погода</p>
        </Li>
        <Li>
          <p>Новини</p>
        </Li>
        <Li>
          <p>Гороскоп</p>
        </Li>
        <Li>
          <p>Їжа</p>
        </Li>
        <Li>
          <p>Здоровʼє</p>
        </Li>
        <LiActive>
          <p>Замовлення</p>
        </LiActive>
      </Ul>
    );
}