import { combineReducers } from "redux";
import userReducer from "./user/users";
import cityReducer from "./city/citites";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist:['user']
};

const reducer = combineReducers({
  user: userReducer,
  city: cityReducer
});

export default persistReducer(persistConfig, reducer);
