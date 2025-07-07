'use client'

import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
// import slices here
import authSlice from './slices/auth.slice';

const persistConfig = {
    key: 'Maalifu',
    storage,
    whiteList: ['auth'], // Specify which slices to persist
};

const rootReducer = combineReducers({
    auth: authSlice,
    // Add other slices here as needed
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Needed for Redux Persist
        }),
});

export const persistor = persistStore(store);

// TypeScript helpers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();