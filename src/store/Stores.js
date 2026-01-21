import {combineReducers, configureStore} from '@reduxjs/toolkit'
import cartReducer from '../slices/cartSlice'
import wishReducer  from '../slices/wishSlice'
import uiReducer from '../slices/uiSlice'
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage ,
}
const rootReducer = combineReducers({
  cart: cartReducer,
  wish: wishReducer,
  ui: uiReducer,
})

const persistedReducer = persistReducer(persistConfig,rootReducer )

export const store = configureStore({
  reducer:persistedReducer
})

export const persistor = persistStore(store)