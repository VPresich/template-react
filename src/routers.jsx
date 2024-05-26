import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// import ClientInfo from "./components/ClientInfo/ClientInfo";
// import PaymentReceipt from "./components/PaymentReceipt/PaymentReceipt";

// Лениво загружаемые компоненты
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const PaymentsPage = lazy(() => import("./pages/PaymentsPage/PaymentsPage"));
const PaymentDetailsPage = lazy(() =>
  import("./pages/PaymentDetailsPage/PaymentDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const ClientInfo = lazy(() => import("./components/ClientInfo/ClientInfo"));
const PaymentReceipt = lazy(() =>
  import("./components/PaymentReceipt/PaymentReceipt")
);

const AppRouters = () => {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/payments/:paymentId" element={<PaymentDetailsPage />}>
          <Route path="client" element={<ClientInfo />} />
          <Route path="receipt" element={<PaymentReceipt />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouters;
