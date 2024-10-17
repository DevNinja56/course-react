import { configureStore } from '@reduxjs/toolkit';
import { stateQueryApi } from '@/store/slices/allRequests';
import {rootReducer} from './rootReducer';
import {persistReducer,persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'


const coursePersistConfig={
    key:'root',
    storage,
    whitelist:['filterQuery']

}
 const persistedReducer=persistReducer(coursePersistConfig,rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(stateQueryApi.middleware),
    devTools: process.env.NODE_ENV !== 'production'
});
export const persistor = persistStore(store)


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
