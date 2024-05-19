import "./App.css";
import PageTitle from "../PageTitle/PageTitle";
import PaymentList from "../PaymentList/PaymentList";
import payments from "../../data/payment.json";

function App() {
  return (
    <div>
      <>
        <PageTitle>Payments</PageTitle>
        <PaymentList payments={payments} />
      </>
    </div>
  );
}

export default App;
