import "./App.css";
import PageTitle from "../PageTitle/PageTitle";
import Button from "../Button/Button";

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
      <Button variant="primary">My Button</Button>
      <Button variant="secondary">My Button</Button>
    </div>
  );
}

export default App;
