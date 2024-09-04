import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  PURGE,
  PAUSE,
  PERSIST,
  REHYDRATE,
  REGISTER,
} from "redux-persist";

import fetchApi_reducer from "./reducers/fetchApi_reducer";
import addInCart_reducer from "./reducers/addInCart_reducer";
import soloProduct_reducer from "./reducers/soloProduct_reducer";

const rootReducer = combineReducers({
  fetchApi_reducerKey: fetchApi_reducer,
  addInCart_reducerKey: addInCart_reducer,
  soloProduct_reducerKey: soloProduct_reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["addInCart_reducerKey", "soloProduct_reducerKey"],
  blacklist: ["fetchApi_reducerKey"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PURGE, PAUSE, PERSIST, REHYDRATE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
