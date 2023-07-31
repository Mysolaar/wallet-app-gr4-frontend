import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { RestrictedRoute } from "./redux/routes/restrictedRoute";
import { PrivateRoute } from "./redux/routes/privateRoute";
import { fetchCurrentUser } from "./redux/auth/authOperations";
import { ToastContainer } from "react-toastify";
import Loader from "./components/Loader/Loader";

//LAZY LOADING:

const RegisterPage = lazy(() => import("./pages/Register/RegisterPage"));
const LoginPage = lazy(() => import("./pages/Login/LoginPage"));
const Homepage = lazy(() => import("./pages/Homepage/Homepage"));


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={
            <RestrictedRoute redirectTo="/homepage" component={<LoginPage />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/homepage"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/homepage" component={<LoginPage />} />
          }
        />
        <Route
          path="/homepage"
          element={
            <PrivateRoute redirectTo="/login" component={<Homepage />} />
          }
        />

        <Route path="*" element={<RegisterPage />} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </Suspense>
  );
}

export default App;
