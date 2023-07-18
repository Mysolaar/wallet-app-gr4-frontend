import Header from "./components/Header/Header";
import ModalLogout from "./components/ModalLogout/ModalLogout";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <div>
      <ModalLogout />
      <Loader />
      <Header />
      Lets get it started!!!
    </div>
  );
}

export default App;
