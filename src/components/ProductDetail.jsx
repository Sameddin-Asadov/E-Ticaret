import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import {setselectedProduct} from '../slices/Products';
import '../css/ProductDetail.css'
import { CiCircleMinus } from "react-icons/ci";
import { CiMedicalCross } from "react-icons/ci";
import { addToBasket } from '../slices/BasketSlice';
import { decrement } from '../slices/CounterProducts';
import { increment  } from '../slices/CounterProducts';
 


function ProductDetail() {
//   const [count, setCount ]= useState(0)
//   const increment = ()=>{
// setCount(count +1)
//   }
//   const decriment =()=>{
//     setCount(count -1)
//   }
 

  const {id} = useParams();
  const {selectProduct , products} = useSelector((store)=> store.product)
const {title, description , image, price, } = selectProduct

const dispatch = useDispatch()
 const {counter} = useSelector((store)=> store.counter)

 function clickincrement(){
  dispatch(increment(counter))
}
 function clickdecrement(){
dispatch(decrement(counter))
}

      


  useEffect(()=>{getPorductBYId()},[])


  const addBasket=()=>{
    const payload ={
      id,
      price,
      title,
      description , 
      image, 
      counter
    }
  
    dispatch(addToBasket(payload))
  }

  const getPorductBYId = ()=>{
    products && products.map((porduct)=>{
      if(porduct.id == id){
       dispatch(setselectedProduct(porduct))
      }
    })
  }
  return (
    <div>
      <div className="parent">
        <div  > <img src={image} className='last-img' alt="" /></div>
        <div className='info'>
          <p className='tilte-info'>{title}</p>
          <p className='description-info'> {description}</p>
          <strong>{price}<sup>₼</sup> </strong>
          <div className='count'>
        <CiMedicalCross onClick={clickincrement} className='count-icon' /><span >{counter}</span>
        <CiCircleMinus onClick={clickdecrement} className='count-icon'/>
        
        </div>
        <button onClick={addBasket} >Sebete elave edin</button>
        </div>
       
      </div>
    </div>
  )
}

export default ProductDetail
