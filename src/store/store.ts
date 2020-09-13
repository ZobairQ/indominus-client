import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import reducer from './reducer';
import { persistStore } from "redux-persist";
export const store  = configureStore({
    reducer,
    middleware:[...getDefaultMiddleware(), logger]
});

export const persistor = persistStore(store);

