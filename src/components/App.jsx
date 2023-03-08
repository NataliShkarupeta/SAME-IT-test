import { Route, Routes } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import { HomePage } from "pages/HomePage/HomePage";
import { ListPoints } from "pages/ListPoints/ListPoints";

export const App = () => {
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
