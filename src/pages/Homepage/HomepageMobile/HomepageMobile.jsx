import Navigate from "../../../components/Navigate/Navigate.jsx";
import Transactions from "../../../components/Transactions/Transactions.jsx";
import Currency from "./Currency/Currency.jsx";
import styles from "./HomepageMobile.module.css";
import Mainpage from "./MainPage/Mainpage.jsx";

const HomepageMobile = ({
  page,
  setHomePage,
  setStatisticsPage,
  setCurrencyPage,
}) => {
  return (
    <>
      <Navigate
        setHomePage={setHomePage}
        setStatisticsPage={setStatisticsPage}
        setCurrencyPage={setCurrencyPage}
      />
      {(() => {
        switch (page) {
          case "Home":
            return <Mainpage />;
          case "Currency":
            return <Currency />;
          default:
            return <div>Sorry, something went wrong</div>;
        }
      })()}
    </>
  );
};

export default HomepageMobile;
