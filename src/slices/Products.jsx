import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    products:[],
    selectProduct:{},
    loading : false

}
const Base_Url = 'https://fakestoreapi.com'

export const getProdcuts = createAsyncThunk('allProducts',
  async  ()=>{
    const response = await axios.get(`${Base_Url}/products`)
    return response.data
    }
)
export const produceSlice = createSlice({
   name:'produce',
   initialState,
    reducers:{
        setselectedProduct: (state,action)=>{
            state.selectProduct = action.payload
        }
    },
    extraReducers: (builder)=>{

        builder.addCase(getProdcuts.pending , (state)=>{
            state.loading = true
        })
        builder.addCase(getProdcuts.fulfilled ,(state , action)=>{
            state.loading = false
            state.products = action.payload
        })

    }
})

export const { setselectedProduct } = produceSlice.actions

export default produceSlice.reducer