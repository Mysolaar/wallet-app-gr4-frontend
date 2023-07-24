import { useSelector } from "react-redux";
import {
  selectName,
  selectIsFetchingCurrentUser,
  selectIsAuth,
} from "../redux/auth/authSelectors";

export const useAuth = () => {
  const isAuth = useSelector(selectIsAuth);
  const isRefreshing = useSelector(selectIsFetchingCurrentUser);
  const user = useSelector(selectName);

  return {
    isAuth,
    isRefreshing,
    user,
  };
};
