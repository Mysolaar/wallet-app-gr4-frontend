import { useSelector } from "react-redux";
import {
  selectName,
  selectIsFetchingCurrentUser,
  selectIsAuth,
  selectIsLoggedIn,
  selectToken,
} from "../redux/auth/authSelectors";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { fetchCurrentUser } from "../redux/auth/authOperations";

export const useAuth = () => {
  const isAuth = useSelector(selectIsAuth);
  const isRefreshing = useSelector(selectIsFetchingCurrentUser);
  const user = useSelector(selectName);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isToken = useSelector(selectToken);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   async function fetchUser() {
  //     try {
  //       await dispatch(fetchCurrentUser());
  //     } catch (error) {
  //       console.error("Błąd podczas pobierania danych użytkownika: ", error);
  //     }
  //   }
  //   fetchUser();
  // }, [dispatch]);

  return {
    isAuth,
    isRefreshing,
    user,
    isLoggedIn,
    isToken,
  };
};
