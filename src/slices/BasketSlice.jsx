import {  createSlice } from "@reduxjs/toolkit";


export const getBasketFromStorage= ()=>{
    if(localStorage.getItem("basket")){
       return  JSON.parse(localStorage.getItem("basket"))
    }else{
        return []
    }
}

const initialState={
    products: getBasketFromStorage(),
}

export const writeFromBasketToStorage = (basket)=>{
localStorage.setItem("basket", JSON.stringify(basket))
}



export const getBasket = createSlice({
    name:'basket',
    initialState,
    reducers:{
      addToBasket:(state, action) =>{
        const findProduct = state.products && state.products.find((product)=>  product.id === action.payload.id)
            if(findProduct){
                const extreactingProducts = state.products.filter((product)=> product.id !== action.payload.id)
                findProduct.counter += action.payload.counter;
                state.products =[...extreactingProducts,findProduct]
                writeFromBasketToStorage(state.products)
            }
            else{
                state.products =[...state.products, action.payload]
                writeFromBasketToStorage(state.products)
            }
      },
      deletProductinLocal :(state , action)=>{
         state.products && state.products.forEach(function(product, index){
            if(product.id == action.payload.id ){
                state.products.splice(index,1)
            }
         })
         writeFromBasketToStorage(state.products)
      },
         countInBasket:(state,action)=>{
            const findProduct = state.products && state.products.find((product)=>  product.id === action.payload.id)
            const extreactingProducts = state.products.filter((product)=> product.id !== action.payload.id)
            findProduct.counter += 1;
            state.products =[...extreactingProducts,findProduct]
           
            writeFromBasketToStorage(state.products)

         }
      }
    }
)


export const {  addToBasket , deletProductinLocal, countInBasket } = getBasket.actions

export default getBasket.reducer