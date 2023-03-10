import { Route, Routes } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import { HomePage } from "pages/HomePage/HomePage";
import { ListPoints } from "pages/ListPoints/ListPoints";
// import { selectPoints } from 'redux/points/pointsSelectors';
import { useDispatch } from 'react-redux';
import { fetchAllPoints } from 'redux/points/pointsOperations';
import { useEffect } from 'react';
import { fetchInvoiceList } from "redux/invoiceList/invoiceListOperations";

export const App = () => {
  //  const points = useSelector(selectPoints);
   const dispatch = useDispatch();


    useEffect(() => {
      dispatch(fetchAllPoints());
      dispatch(fetchInvoiceList())
    }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="branches"  element={<ListPoints/>}/>
        </Route>
      </Routes>
    </>
  );
};
