import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import sliceMemory from 'data/slices/sliceMemory';

const rootReducer = combineReducers({ sliceMemory });

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['sliceMemory'],
};

const persidtedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persidtedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export { store };
