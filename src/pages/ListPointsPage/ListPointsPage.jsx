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
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectErrorPoints } from 'redux/points/pointsSelectors';

// FaRegSmileWink;
// FaRegFrown;

export const ListPoints = () => {
  const [city, setCity] = useState('');
  const [page, setPage] = useState(1);

  const timerDebounceRef = useRef();
  const error = useSelector(selectErrorPoints);

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
      if (error) {
        toast.error(`Щось пішло не так, спробуйте ще`);
      }
    }, 1500);
     
    };
    if (city) getInfoCity(city);
  }, [city, dispatch, error, page]);

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
    <>
      <ToastContainer
        transition={Zoom}
        draggable={false}
        position="top-center"
      />
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
          </Form>
          <WrapButtons>
            {points.length > 0 && (
              <>
                <Button onClick={onLoadMore}>Довантажити</Button>
                <Button onClick={clearFieldAndList}>Очистити</Button>
              </>
            )}
          </WrapButtons>
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
          {/* <WrapButtons>
            {points.length > 0 && (
              <>
                <Button onClick={onLoadMore}>Довантажити</Button>
                <Button onClick={clearFieldAndList}>Очистити</Button>
              </>
            )}
          </WrapButtons> */}
        </div>
      </WrapAll>
    </>
  );
};
