import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom'

function Product({product}) {
  const {image, price , description , title ,id} =product
  const navigate = useNavigate()
  return (
    <div>
    <div className='card'>
    <img className='image' src={image} alt="" />
    <div className='product-info'>
      <p className='product-title'>{title}</p>
      <strong>{price}<sup>₼</sup> </strong>
      <div className='flex-row'>
        <button onClick={()=>{navigate('/product-details/' + id)}} className='product-btn'>Məhsul haqqında</button>
      </div>
    </div>
    </div>
   
      
    </div>
  )
}

export default Product
