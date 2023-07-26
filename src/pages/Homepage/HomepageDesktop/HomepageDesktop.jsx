import styles from "./HomepageDesktop.module.css";
import MainpageDesktop from "./Mainpage/Mainpage.jsx";

const HomepageDesktop = ({
  page,
  setHomePage,
  setStatisticsPage,
  setCurrencyPage,
}) => {
  return (
    <>
      <MainpageDesktop
        page={page}
        setHomePage={setHomePage}
        setStatisticsPage={setStatisticsPage}
        setCurrencyPage={setCurrencyPage}
      />
    </>
  );
};

export default HomepageDesktop;
