// import { useEffect} from "react";
// import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
// import { RestrictedRoute } from "./redux/routes/restrictedRoute";
// import { PrivateRoute } from "./redux/routes/privateRoute";
// import { fetchCurrentUser } from "./redux/auth/authOperations";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader/Loader";
import Homepage from "./pages/Homepage/Homepage.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
// import Transaction from "./components/Transactions/Transactions.jsx";
// import { useAuth } from "./hooks/useAuth";

//LAZY LOADING:
const RegisterPage = lazy(() => import("./pages/Register/RegisterPage"));
const LoginPage = lazy(() => import("./pages/Login/LoginPage"));
// const DashboardPage = lazy(() => import("./pages/DashboardDashboardPage"));
// const StatisticsPage = lazy(() => import("./pages/Statistics/StatisticsPage"));
// const CurrencyPage = lazy(() => import("./pages/Currency/CurrencyPage"));

// import Header from "./components/Header/Header";
// import ModalLogout from "./components/ModalLogout/ModalLogout";
// import ModalAddTransactions from "./components/ModalAddTransactions/ModalAddTransactions";

function App() {
  // const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(fetchCurrentUser());
  // }, [dispatch]);

  return (
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </Provider>
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
