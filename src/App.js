import Header from "./components/Header/Header";
// import ModalLogout from "./components/ModalLogout/ModalLogout";
// import Loader from "./components/Loader/Loader";
// import RegisterPage from "./pages/Register/RegisterPage";
// import ModalAddTransactions from "./components/ModalAddTransactions/ModalAddTransactions";
import Table from "./components/Table/Table.jsx";
// import LoginPage from "./pages/Login/LoginPage";
function App() {
  return (
    <div>
      {/* <RegisterPage />
      <ModalLogout />
      <Loader /> */}
      <Header />
      {/* <ModalAddTransactions type="add" /> */}
      <Table />
    </div>
  );
}

export default App;
