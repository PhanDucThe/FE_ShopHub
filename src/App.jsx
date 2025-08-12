import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/customer/home/HomePage";
import NotFoundPage from "./pages/error/NotFoundPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import SellerDashboard from "./pages/seller/dashboard/SellerDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/dang-nhap" element={<Login />}></Route>
        <Route path="/dang-ky" element={<Register />}></Route>
        <Route path="/nguoi-ban" element={<SellerDashboard />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
