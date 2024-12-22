import { configureStore } from "@reduxjs/toolkit";
import  appReducer  from "../../slices/appSlice";
import  produceReducer from "../../slices/Products";
import  basketRedcuer from "../../slices/BasketSlice";
import counterReducer from "../../slices/CounterProducts";



export default configureStore({
    reducer:{
        app : appReducer,
        product: produceReducer,
        basket: basketRedcuer,
            counter:counterReducer
    }
})