import { useSelector } from "react-redux";
import Currency from "../../../components/Currency/Currency.jsx";
import Navigate from "../../../components/Navigate/Navigate.jsx";
import Transactions from "../../../components/Transactions/Transactions.jsx";
import MainpageMobile from "./MainPage/Mainpage.jsx";
import StatisticsMobile from "./Statistics/StatisticsMobile.jsx";
import { selectCurrentPage } from "../../../redux/global/globalSelectors.js";

const HomepageMobile = ({
  setHomePage,
  setStatisticsPage,
  setCurrencyPage,
}) => {
  const page = useSelector(selectCurrentPage);

  return (
    <>
      <Navigate
        setHomePage={setHomePage}
        setStatisticsPage={setStatisticsPage}
        setCurrencyPage={setCurrencyPage}
        page={page}
      />
      {(() => {
        switch (page) {
          case "Home":
            return <MainpageMobile />;
          case "Currency":
            return <Currency />;
          case "Statistics":
            return <StatisticsMobile />;
          default:
            return <MainpageMobile />;
        }
      })()}
    </>
  );
};

export default HomepageMobile;
