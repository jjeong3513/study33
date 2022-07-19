
import { configureStore,combineReducers } from '@reduxjs/toolkit';
import videoSlice from './video/videoSlice';

const reducer  = combineReducers({
    video:videoSlice,
})

const store = configureStore({
    reducer,
    middleware:(getDefaultMiddleware) =>  getDefaultMiddleware()
})

export default store;