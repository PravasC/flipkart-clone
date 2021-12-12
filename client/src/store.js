import {createStore , combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ProductListReducer ,ProductDetailReducer } from './reducers/ProductReducer';

const reducer = combineReducers({productList:ProductListReducer , productDetails:ProductDetailReducer});
const initialState ={};
const middleware = [thunk];

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;