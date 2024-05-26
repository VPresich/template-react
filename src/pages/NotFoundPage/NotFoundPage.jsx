import { Link } from "react-router-dom";
// import css from "./NotFoundPage.module.css";
import AppContainer from "../../components/AppContainer/AppContainer";
const NotFoundPage = () => {
  return (
    <AppContainer>
      <p>NotFound Page</p>
      <Link to="/">Back to HomePage</Link>
    </AppContainer>
  );
};
export default NotFoundPage;
