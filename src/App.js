// import { useEffect, lazy } from "react";
// import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { PrivateRoute } from "./HOC/PrivateRoute";
// import { PublicRoute } from "./HOC/PublicRoute";

// import { fetchCurrentUser } from "./redux/auth/authOperations";

// import Loader from "./components/Loader/Loader";
import RegisterPage from "./pages/Register/RegisterPage";
import LoginPage from "./pages/Login/LoginPage";

// import { useAuth } from "./hooks/useAuth";

//LAZY LOADING:

// const RegisterPage = lazy(() => import("./pages/Register/RegisterPage"));
// const LoginPage = lazy(() => import("./pages/Login/LoginPage"));
// const DashboardPage = lazy(() => import("./pages/DashboardDashboardPage"));
// const StatisticsPage = lazy(() => import("./pages/Statistics/StatisticsPage"));
// const CurrencyPage = lazy(() => import("./pages/Currency/CurrencyPage"));

function App() {
  return (
    <Routes>
      <Route index element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}

export default App;

// DO WYKORZYSTANIA PÓŹNIEJ w App

// const dispatch = useDispatch();
//   const { isRefreshing } = useAuth();

//   useEffect(() => {
//     dispatch(fetchCurrentUser());
//   }, [dispatch]);

//   return isRefreshing ? (
//     <Loader />
//   ) : (
//     <Routes>
//       <Route path="/" element={<RegisterPage />} />
//       <Route path="/login" element={<LoginPage />} />

//       <Route path="*" element={<LoginPage />} />
//     </Routes>
//   );
// }

//----------------------------

// return isRefreshing ? (
//     <Loader />
//   ) : (
//     <Routes>
//       <Route
//         path="/"
//         element={
//           <PublicRoute redirectTo="/home" component={<RegisterPage />} />
//         }
//       />
//       <Route
//         path="/login"
//         element={<PublicRoute redirectTo="/home" component={<LoginPage />} />}
//       />

//       <Route
//         path="/home"
//         element={
//           <PrivateRoute redirectTo="/login" component={<DashboardPage />} />
//         }
//       />
//       <Route
//         path="/statistics"
//         element={
//           <PrivateRoute redirectTo="/login" component={<StatisticsPage />} />
//         }
//       />
//       <Route
//         path="/currency"
//         element={
//           <PrivateRoute redirectTo="/login" component={<CurrencyPage />} />
//         }
//       />

//       <Route path="*" element={<LoginPage />} />
//     </Routes>
//   );
// }
