import { configureStore } from "@reduxjs/toolkit";
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
import balanceReducer from "./balanceSlice";
import localeReducer from "./localeSlice";

const balancePersistConfig = {
  key: "balance",
  storage,
  whitlist: ["value"],
};

const persistedBalanceReducer = persistReducer(
  balancePersistConfig,
  balanceReducer
);

export const store = configureStore({
  reducer: {
    balance: persistedBalanceReducer,
    locale: localeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
