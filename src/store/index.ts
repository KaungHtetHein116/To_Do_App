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
import toDo from './toDo'
import reactotron from '../../ReactotronConfig'

export const reducers = combineReducers({
	toDo,
})

export type RootState = ReturnType<typeof reducers>

const persistConfig: any = {
	key: 'root',
	storage: reduxStorage,
	version: 1,
	whiteList: ['toDo'],
	blacklist: [],
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
			})

			return middlewares
		},
		enhancers: getDefaultEnhancers => {
			return getDefaultEnhancers().concat(reactotron.createEnhancer!())
		},
	})
}

const store = setupStore()

const persistor = persistStore(store)

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => typeof store.dispatch = useDispatch

setupListeners(store.dispatch)

export { store, persistor }
