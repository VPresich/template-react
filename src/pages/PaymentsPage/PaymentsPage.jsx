import { useEffect, useState, useMemo } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { fetchPayments } from "../../components/api/payments-api";
import toast, { Toaster } from "react-hot-toast";
import PaymentList from "../../components/PaymentList/PaymentList";
// import css from "./PaymentsPage.module.css";
import AppContainer from "../../components/AppContainer/AppContainer";
import PaimentsFilter from "../../components/PaimentsFilter/PaimentsFilter";

const PaymentPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [payments, setPayments] = useState([]);

  const [params] = useSearchParams();
  const ownerFilter = params.get("owner") ?? "";
  const location = useLocation();
  console.log(location);

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

  const filteredPayments = useMemo(() => {
    return payments.filter((payment) =>
      payment.cardOwner.toLowerCase().includes(ownerFilter.trim().toLowerCase())
    );
  }, [ownerFilter, payments]);

  return (
    <AppContainer>
      <PaimentsFilter />
      {error && <p>Error!!! Reload page!</p>}
      {isLoading && <p>Payments are loading ...</p>}
      {payments.length > 0 && <PaymentList payments={filteredPayments} />}
      <Toaster />
    </AppContainer>
  );
};
export default PaymentPage;
