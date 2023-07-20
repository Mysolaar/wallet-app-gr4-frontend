import Header from "./components/Header/Header";
import ModalLogout from "./components/ModalLogout/ModalLogout";
import Loader from "./components/Loader/Loader";
import Navigate from "./components/Navigate/Navigate";

function App() {
  return (
    <div>
      {/* <ModalLogout /> */}
      <Loader />
      <Header />
      <Navigate />
      Lets get it started!!!
    </div>
  );
}

export default App;
