import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  stepperSlice  from "./slice";

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';


const reducers = combineReducers({
  stepper:stepperSlice
})
const persistConfig = {
  key: 'root',
  storage,
}   


const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);