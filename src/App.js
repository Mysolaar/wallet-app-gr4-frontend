// import { Layout } from "./Layout";
// // import { useDispatch } from "react-redux";
// import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/loginPage";

function App() {
  return (
    <div>
      <LoginPage />
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Login</div>}></Route>
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
