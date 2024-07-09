import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import { reduxStorage } from '@/utils/storage'
import reactotron from '../../ReactotronConfig'
import { baseApi } from '@/services'

export const reducers = combineReducers({
	[baseApi.reducerPath]: baseApi.reducer,
})

export type RootState = ReturnType<typeof reducers>

const persistConfig: any = {
	key: 'root',
	storage: reduxStorage,
	version: 1,
	whiteList: [],
	blacklist: ['baseApi'],
	stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const setupStore = () => {
	return configureStore({
		reducer: persistedReducer,
		middleware: getDefaultMiddleware => {
			const middlewares = getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [
						FLUSH,
						REHYDRATE,
						PAUSE,
						PERSIST,
						PURGE,
						REGISTER,
					],
				},
			}).concat(baseApi.middleware)

			return middlewares
		},
		// enhancers: getDefaultEnhancers => {
		// 	return getDefaultEnhancers().concat(reactotron.createEnhancer!())
		// },
	})
}

const store = setupStore()

const persistor = persistStore(store)

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => typeof store.dispatch = useDispatch

setupListeners(store.dispatch)

export { store, persistor }
