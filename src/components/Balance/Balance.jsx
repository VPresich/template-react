import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deposit, withdraw } from "../../redux/balanceSlice";

const Balance = () => {
  const balance = useSelector((state) => state.balance.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  const handleInputChange = (e) => {
    setAmount(Number(e.target.value));
  };

  return (
    <div>
      <p>Balance: {balance} credits</p>

      <input type="number" value={amount} onChange={handleInputChange} />

      <button onClick={() => dispatch(deposit(amount))}>Deposit</button>
      <button onClick={() => dispatch(withdraw(amount))}>Withdraw</button>
    </div>
  );
};

export default Balance;
