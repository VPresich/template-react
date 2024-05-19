import Payment from "../Payment/Payment";
import css from "./PaymentList.module.css";

const PaymentList = ({ payments }) => {
  return (
    <ul className={css.list}>
      {payments.map((payment) => (
        <li className={css.item} key={payment.id}>
          <Payment data={payment} />
        </li>
      ))}
    </ul>
  );
};

export default PaymentList;
