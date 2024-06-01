import LoginForm from "../../components/LoginForm/LoginForm";
import AppContainer from "../../components/AppContainer/AppContainer";
import PageTitle from "../../components/PageTitle/PageTitle";
import DocumentTitle from "../../components/DocumentTitle";

export default function Login() {
  return (
    <>
      <DocumentTitle>Login</DocumentTitle>
      <AppContainer>
        <PageTitle>Please log in</PageTitle>
      </AppContainer>
      <LoginForm />
    </>
  );
}
