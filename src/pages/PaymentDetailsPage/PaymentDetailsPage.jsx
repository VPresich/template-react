import { useEffect, useState } from "react";
import clsx from "clsx";
import { NavLink, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchPaymentById } from "../../components/api/payments-api";
import Payment from "../../components/Payment/Payment";
import AppContainer from "../../components/AppContainer/AppContainer";

import css from "./PaymentDetailsPage.module.css";

const classItem = ({ isActive }) => {
  return clsx(css.itemLink, isActive && css.activeItemLink);
};

const PaymentDetailsPage = () => {
  const { paymentId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [payment, setPayment] = useState(null);

  useEffect(() => {
    async function getPaiment() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchPaymentById(paymentId);
        setPayment(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getPaiment();
  }, [paymentId]);

  return (
    <AppContainer>
      <h2>Payment Details: {paymentId}</h2>
      {error && <p>Error!!! Reload page!</p>}
      {isLoading && <p>Payments are loading ...</p>}
      {payment && <Payment data={payment} />}

      <ul className={css.list}>
        <li>
          <NavLink className={classItem} to="client">
            Client info
          </NavLink>
        </li>

        <li>
          <NavLink className={classItem} to="receipt">
            Receipt
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </AppContainer>
  );
};
export default PaymentDetailsPage;
