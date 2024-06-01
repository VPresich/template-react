import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// import PrivateRoute from './PrivateRoute';
// import RestrictedRoute from './RestrictedRoute';
// import AppContainer from './AppContainer/AppContainer.jsx';
// import HomePage from './pages/Home/Home';

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const Tasks = lazy(() => import("../pages/Tasks/Tasks"));
const RegisterPage = lazy(() => import("../pages/Register/Register"));
const LoginPage = lazy(() => import("../pages/Login/Login"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

const AppRouter = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
