import { NavigationLink, Wrap } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Wrap>
      <NavigationLink to="/"> Перевірити ТТН</NavigationLink>
      <NavigationLink to="/branches"> Список відділень </NavigationLink>
    </Wrap>
  );
};
