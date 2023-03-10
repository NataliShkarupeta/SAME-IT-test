import { Wrap } from './ListPoints.styled';
import { selectPoints } from 'redux/points/pointsSelectors';
import {  useSelector } from 'react-redux';


export const ListPoints = () => {
  const points = useSelector(selectPoints);

//    console.log('points', points);

  return (
    <Wrap>
      <p>Список відділень у Києві :</p>

      <ul>
        {' '}
        {points.map(point => (
          <li key={point.SiteKey}> {point.Description}</li>
        ))}
      </ul>
    </Wrap>
  );
};
