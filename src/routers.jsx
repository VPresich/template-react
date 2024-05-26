import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import PaymentDetailsPage from "./pages/PaymentDetailsPage/PaymentDetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ClientInfo from "./components/ClientInfo/ClientInfo";
import PaymentReceipt from "./components/PaymentReceipt/PaymentReceipt";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/payments" element={<PaymentPage />} />
      <Route path="/payments/:paymentId" element={<PaymentDetailsPage />}>
        <Route path="client" element={<ClientInfo />} />
        <Route path="receipt" element={<PaymentReceipt />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default AppRouters;
