import axios from "axios";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth/authSlice";
import transactionsReducer from "./transactions/transactionsSlice";
import userReducer from "./user/userSlice";
import globalReducer from "./global/globalSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  transactions: transactionsReducer,
  user: userReducer,
  global: globalReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store, null, () => {
  axios.defaults.headers.common.Authorization = `Bearer ${
    store.getState().auth.token
  }`;
});

export default store;
