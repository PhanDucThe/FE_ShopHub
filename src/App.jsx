import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/customer/home/HomePage";
import NotFoundPage from "./pages/error/NotFoundPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import SellerDashboard from "./pages/seller/dashboard/SellerDashboard";
import LaptopDetail from "./pages/customer/product_detail/LaptopDetail";
import PhoneDetail from "./pages/customer/product_detail/PhoneDetail";
import SmartWatchDetail from "./pages/customer/product_detail/SmartWatchDetail";
import TvDetail from "./pages/customer/product_detail/TvDetail";
import CartPage from "./pages/customer/cart/CartPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/dang-nhap" element={<Login />}></Route>
        <Route path="/dang-ky" element={<Register />}></Route>
        <Route path="/nguoi-ban" element={<SellerDashboard />}></Route>
        <Route path="/iphone-detail/:slug" element={<PhoneDetail />}></Route>
        <Route path="/laptop-detail/:slug" element={<LaptopDetail />}></Route>
        <Route
          path="/smart-watch-detai/:slug"
          element={<SmartWatchDetail />}
        ></Route>
        <Route path="cart-detail" element={<CartPage />}></Route>
        <Route path="/tivi-detail/:slug" element={<TvDetail />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
