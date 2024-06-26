import clsx from "clsx";
import { FaCcAmazonPay } from "react-icons/fa6";
import css from "./Payment.module.css";

const Payment = ({
  data: { amount, description, cardType, cardNumber, cardOwner, date, isPaid },
}) => {
  const containerClass = clsx(
    css.container,
    isPaid ? css.isPaid : css.isPending
  );

  const iconClass = clsx(css.icon, isPaid ? css.green : css.red);

  return (
    <div className={containerClass}>
      <div>
        <FaCcAmazonPay size="40" className={iconClass} />
      </div>
      <p>
        Status: {isPaid ? "Paid" : "Pending"} {amount}$
      </p>
      <h2>Description: {description}</h2>
      <p>Card owner: {cardOwner}</p>
      <p>Card Number: {cardNumber}</p>
      <p>Card Type: {cardType}</p>
      <p>Card Holder Name: {cardOwner}</p>
      <h3>Payment Date: {date}</h3>
    </div>
  );
};

export default Payment;
