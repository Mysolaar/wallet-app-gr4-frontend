import { useSelector } from "react-redux";
import {
  selectName,
  selectIsFetchingCurrentUser,
  selectIsAuth,
  selectIsLoggedIn,
} from "../redux/auth/authSelectors";

export const useAuth = () => {
  const isAuth = useSelector(selectIsAuth);
  const isRefreshing = useSelector(selectIsFetchingCurrentUser);
  const user = useSelector(selectName);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return {
    isAuth,
    isRefreshing,
    user,
    isLoggedIn,
  };
};
