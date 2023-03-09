import { Wrap } from './ListPoints.styled';
import { selectPoints } from 'redux/points/pointsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPoints } from 'redux/points/pointsOperations';
import { useEffect } from 'react';

export const ListPoints = () => {
  const points = useSelector(selectPoints);
  const dispatch = useDispatch();

  console.log(points);

  useEffect(() => {
    dispatch(fetchAllPoints());
  }, [dispatch]);

  return (
    <Wrap>
      <p>Список відділень:</p>

      {/* <ul> {points.map(point => ( <li key={point.id}> {point}</li> ))}</ul> */}
    </Wrap>
  );
};
