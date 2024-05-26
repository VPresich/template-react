import { useEffect, useState, useRef, Suspense } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import clsx from "clsx";

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

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/payments");
  console.log(backLinkRef);

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

      <Link to={backLinkRef.current}>Go back</Link>

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

      <Suspense fallback={<div>Loading sub page...</div>}>
        <Outlet />
      </Suspense>
    </AppContainer>
  );
};
export default PaymentDetailsPage;
