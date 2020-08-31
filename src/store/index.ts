import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
// Redux store 仅支持同步数据流。使用 thunk 等中间件可以帮助在 Redux 应用中实现异步性
import thunk from 'redux-thunk' 
//  存储机制，可换localStorage等，当前使用sessionStorage
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import Notice from './utils/notice'
import UserInforn from './utils/userInforn'
const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
};
const rootReducers: any = combineReducers({
    Notice,
    UserInforn

});
const myPersistReducer = persistReducer(persistConfig, rootReducers)

const store = createStore(myPersistReducer, compose(applyMiddleware(...[thunk])));
export const persistor = persistStore(store)
export default store;
