import {
  Wrap,
  H3,
  Block,
  Form,
  WrapAll,
  WrapButtons,
} from './ListPointsPage.styled';
import { selectPoints } from 'redux/points/pointsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'components/FormRequest/FormRequest.styled';
import {  useRef, useState } from 'react';
import { Button } from 'components/FormRequest/FormRequest.styled';
import { fetchAllPoints } from 'redux/points/pointsOperations';
import { resetPoints } from 'redux/points/pointsSlice';
import { useEffect } from 'react';
import { selectIsLoadingPoints } from 'redux/points/pointsSelectors';
import { Rings } from 'react-loader-spinner';

// FaRegSmileWink;
// FaRegFrown;

export const ListPoints = () => {
  const [city, setCity] = useState('');
  const [page, setPage] = useState(1);

  const timerDebounceRef = useRef();
  
  // const takeCity = ({target}) => {
  //  const nameCity = target.value.trim();
  //   if (timerDebounceRef.current) {
  //     clearTimeout(timerDebounceRef.current);
  //   }

  //   timerDebounceRef.current = setTimeout(() => {
  //     if (nameCity !== city) {
  //       dispatch(resetPoints([]));
  //       setCity(target.value);
  //       setPage(1);
  //     } else {
  //       setCity(target.value);
  //     }
  //   }, 1000);
  // };
  const takeCity = ({ target }) => {
    const nameCity = target.value.trim();
    setCity(nameCity);
    if (nameCity !== city) {
      dispatch(resetPoints([]));
      setCity(nameCity);
      setPage(1);
    } else {
      setCity(nameCity);
    }
  };

  const points = useSelector(selectPoints);
  const isLoading = useSelector(selectIsLoadingPoints);
  const dispatch = useDispatch();

  useEffect(() => {
    const getInfoCity = city => {
      if (city.trim() === '') {
        return;
      }
      const data = {
        city,
        page,
      };
    
    if (timerDebounceRef.current) {
      clearTimeout(timerDebounceRef.current);
    }
    timerDebounceRef.current = setTimeout(() => {
     dispatch(fetchAllPoints(data));
    }, 1000);
     
    };
    if (city) getInfoCity(city);
  }, [city, dispatch, page]);

  const onLoadMore = () => {
    setPage(page + 1);
  };
  const Submit = e => {
    e.preventDefault();
  };

  const clearFieldAndList = () => {
    dispatch(resetPoints([]));
    setCity('');
    setPage(1);
  };

  return (
    <WrapAll>
      <Block>
        <H3>
          Тут Ви можете завантажити довідник відділень «Нова пошта» у розрізі
          міст України.
        </H3>
        <Form onSubmit={Submit}>
          <label>
            <Input
              placeholder="Введіть назву міста"
              type="text"
              autocomplete="off"
              autoFocus
              onChange={takeCity}
              value={city}
            />
          </label>
          {/* <ButtonCity type="submit">
            <FaRegArrowAltCircleDown color="white" />
          </ButtonCity> */}
        </Form>
      </Block>
      <div>
        <Wrap>
          <p>Список відділень у {city ? city : ''} :</p>
          {isLoading && <Rings />}
          <ol>
            {points.map(point => (
              <li key={point.SiteKey}> {point.Description}</li>
            ))}
          </ol>
        </Wrap>
        <WrapButtons>
          {points.length > 0 && (
            <>
              <Button onClick={onLoadMore}>Довантажити</Button>
              <Button onClick={clearFieldAndList}>Очистити</Button>
            </>
          )}
        </WrapButtons>
      </div>
    </WrapAll>
  );
};
