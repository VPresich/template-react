import PageTitle from "../../components/PageTitle/PageTitle";
import AppContainer from "../../components/AppContainer/AppContainer";
import RegistrationForm from "../../components/RegistrationForm/RegistraitionForm";
import DocumentTitle from "../../components/DocumentTitle";

export default function Register() {
  return (
    <>
      <DocumentTitle>Register</DocumentTitle>
      <AppContainer>
        <PageTitle>Register your account</PageTitle>
        <RegistrationForm />
      </AppContainer>
    </>
  );
}
