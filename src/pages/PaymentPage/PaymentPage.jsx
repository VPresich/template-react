import { useEffect, useState } from "react";
import { fetchPayments } from "../../components/api/payments-api";
import toast, { Toaster } from "react-hot-toast";
import PaymentList from "../../components/PaymentList/PaymentList";
// import css from "./PaymentPage.module.css";
import AppContainer from "../../components/AppContainer/AppContainer";

const PaymentPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    async function getPaiments() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchPayments();
        setPayments(data);
        toast.success("HTTP success!");
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getPaiments();
  }, []);

  return (
    <AppContainer>
      {error && <p>Error!!! Reload page!</p>}
      {isLoading && <p>Payments are loading ...</p>}
      {payments.length > 0 && <PaymentList payments={payments} />}
      <Toaster />
    </AppContainer>
  );
};
export default PaymentPage;
