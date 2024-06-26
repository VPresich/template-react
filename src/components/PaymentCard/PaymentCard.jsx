import { useLocation } from "react-router-dom";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { FaCcAmazonPay } from "react-icons/fa6";
import css from "./PaymentCard.module.css";

const PaymentCard = ({
  data: { id, amount, description, cardOwner, date, isPaid },
}) => {
  const containerClass = clsx(
    css.container,
    isPaid ? css.isPaid : css.isPending
  );

  const iconClass = clsx(css.icon, isPaid ? css.green : css.red);

  const location = useLocation();

  return (
    <div className={containerClass}>
      <div>
        <FaCcAmazonPay size="40" className={iconClass} />
      </div>
      <p>
        Status: {isPaid ? "Paid" : "Pending"} {amount}$
      </p>
      <p>Description: {description}</p>
      <p>Card owner: {cardOwner}</p>
      <p>Payment Date: {date}</p>
      <Link to={`/payments/${id}`} state={location}>
        Detailes
      </Link>
    </div>
  );
};

export default PaymentCard;
