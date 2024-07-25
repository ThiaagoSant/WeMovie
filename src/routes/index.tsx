import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import PurchasePage from "../pages/PurchasePage";
import Header from "../components/Header";
import { RoutesEnum } from "../types/enums";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={RoutesEnum.Home} element={<HomePage />} />
        <Route path={RoutesEnum.Cart} element={<CartPage />} />
        <Route path={RoutesEnum.Purchase} element={<PurchasePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
