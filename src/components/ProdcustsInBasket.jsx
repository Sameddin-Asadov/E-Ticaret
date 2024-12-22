import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../css/ProductsInBasket.css';
import { FaTrash } from "react-icons/fa";
import { addToBasket, countInBasket, deletProductinLocal, writeFromBasketToStorage ,  } from '../slices/BasketSlice';
import { CiMedicalCross } from "react-icons/ci";
import '../css/ProductDetail.css'
import { increment } from '../slices/CounterProducts';

function prodcustsInBasket() {
  const dispatch = useDispatch()
const {counter} =useSelector((store) => store.counter)

     let {products} = useSelector((store)=> store.basket)
   const {image, price , description , title ,id } = products
    
  
   

   const deletProduct =(e)=>{
      const deletItem=  e.target.parentElement.parentElement.parentElement
      deletItem.remove()
      console.log(deletItem)
      products && products.map((product)=>{
        if(product.id ==deletItem.id){
          dispatch(deletProductinLocal(product))
        }}) }

        const plusProduct =(e)=>{
   console.log( e.target.parentElement.id)
          products && products.map((product) =>{
            if( e.target.parentElement.id == product.id){
              dispatch(countInBasket(product))}
          })
        
       }
       const copyProdcuts =[...products]
       console.log(copyProdcuts.sort((a, b) => a - b))
  
  return (
    <div > 
     <div>
     
     {products && products.map((product)=>
    <div key={product.id}  className='flex-colum '>
      <div  id={product.id} className="child flex-row">
        <img className='image-basket' src={product.image} alt="" />
        <div className='product-title'>{product.title} </div>
        <div className='product-count flex-row' id={product.id}> <FaTrash className='count-icon' onClick={deletProduct} /><span className='count-icon'  >{product.counter}</span><CiMedicalCross onClick={plusProduct} className='count-icon'/> </div>
        
      </div>
    </div>
    )}
     </div>
      </div>

   
  )
}

export default prodcustsInBasket
