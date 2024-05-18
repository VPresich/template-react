import "./App.css";
import PageTitle from "../PageTitle/PageTitle";

function App() {
  return (
    <div>
      <PageTitle primary={false} onSale={true}>
        Page Title
      </PageTitle>
      <PageTitle primary={false} onSale={false}>
        Page Title
      </PageTitle>
      <PageTitle primary={true} onSale={false}>
        Page Title
      </PageTitle>
      <PageTitle primary={true} onSale={true}>
        Page Title
      </PageTitle>
    </div>
  );
}

export default App;
