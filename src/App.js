import { useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { RestrictedRoute } from "./redux/routes/restrictedRoute";
import { PrivateRoute } from "./redux/routes/privateRoute";
import { fetchCurrentUser } from "./redux/auth/authOperations";
import { ToastContainer } from "react-toastify";
import LoaderMain from "./components/Loader/LoaderMain";
import Layout from "./components/Layout/Layout.jsx";
import Statistics from "./pages/Statistics/Statistics.jsx";

//LAZY LOADING:

const RegisterPage = lazy(() => import("./pages/Register/RegisterPage"));
const LoginPage = lazy(() => import("./pages/Login/LoginPage"));
const HomePage = lazy(() => import("./pages/Homepage/Homepage"));
const PageNotFound = lazy(() => import("./pages/404/PageNotFound"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<LoaderMain />}>
      <Routes>
        <Route
          path="/"
          element={<PrivateRoute redirectTo="/login" component={<Layout />} />}
        >
          <Route index element={<Navigate to="/homepage" />} />
          <Route path="homepage" element={<HomePage />} />
          <Route path="statistics" element={<Statistics />} />
        </Route>

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
        {/* <Route path="/homepage" element={<Layout />}>
          <Route
            index
            element={<PrivateRoute redirectTo="/" component={<HomePage />} />}
          />
          <Route path="statistics" element={<Statistics />} />
        </Route> */}

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </Suspense>
  );
}

export default App;
