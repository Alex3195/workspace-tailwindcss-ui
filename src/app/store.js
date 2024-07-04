import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
    FLUSH, PAUSE,
    PERSIST, persistReducer, PURGE,
    REGISTER, REHYDRATE
} from "redux-persist";
import storageSession from 'redux-persist/lib/storage/session';
import langReducer from "../features/langSlice";
import userReducer from "../features/userSlice";

const authPersistConfig = { key: 'user', storage:storageSession };

const reducers = combineReducers({ user: userReducer, lang: langReducer });
const persistedReducer = persistReducer(authPersistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
