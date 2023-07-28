import { useSelector } from "react-redux";
import {
  selectName,
  selectIsFetchingCurrentUser,
  selectIsAuth,
  selectIsLoggedIn,
  selectToken,
} from "../redux/auth/authSelectors";

export const useAuth = () => {
  const isAuth = useSelector(selectIsAuth);
  const isRefreshing = useSelector(selectIsFetchingCurrentUser);
  const user = useSelector(selectName);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isToken = useSelector(selectToken);

  return {
    isAuth,
    isRefreshing,
    user,
    isLoggedIn,
    isToken,
  };
};
