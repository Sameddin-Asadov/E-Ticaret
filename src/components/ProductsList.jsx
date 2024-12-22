import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProdcuts } from '../slices/Products'
import Product from './Product'
function ProductsList() {
const dispatch = useDispatch()
const {products} = useSelector((store) => store.product)
console.log(products)
useEffect(()=>{
    dispatch(getProdcuts())
},[])


  return (
    <div className='flex-row productslist'>
      
      {
        products && products.map((product)=>(
          <Product key={product.id} product = {product}/>
        ))
      }
    </div>
  )
}

export default ProductsList
