import PaymentCard from "../PaymentCard/PaymentCard";
import PaimentFilter from "../PaimentFilter/PaimentFilter";
import css from "./PaymentList.module.css";

const PaymentList = ({ payments }) => {
  return (
    <>
      <PaimentFilter />
      <ul className={css.list}>
        {payments.map((payment) => (
          <li className={css.item} key={payment.id}>
            <PaymentCard data={payment} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default PaymentList;
