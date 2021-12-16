import {createStore , combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ProductListReducer ,ProductDetailReducer } from './reducers/ProductReducer';
import { UserLoginReducer, UserVerifyReducer } from './reducers/userReducer';

// const userInfoDataStorage = localStorage.getItem("userInfo");

const reducer = combineReducers({productList:ProductListReducer , productDetails:ProductDetailReducer,userLogin:UserLoginReducer,userVerifyData:UserVerifyReducer })
const initialState ={
    // userLogin:{userInfo:userInfoDataStorage}
};
const middleware = [thunk];

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;

// userLogin:UserLoginReducer