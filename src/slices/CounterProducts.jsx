import {  createSlice } from "@reduxjs/toolkit";

const initialState={
   counter:0,

}


export const counterProductsSlice = createSlice({
    name:'counterProducts',
    initialState,
reducers:{
decrement: (state)=>{
state.counter -=1
},
increment: (state)=>{
    state.counter +=1
}
},

})

export const { increment, decrement} = counterProductsSlice.actions

export default counterProductsSlice.reducer