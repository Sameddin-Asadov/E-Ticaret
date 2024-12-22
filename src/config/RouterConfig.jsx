import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from '../components/ProductDetail'
import ProductsInBasket from '../components/prodcustsInBasket'
import Home from '../pages/Home'
function RouterConfig() {
  return (
    <div>
      <div>
        <Routes>
          <Route  path='/' element = {<Home/>}/>
          <Route  path='/product-details/:id'  element={<ProductDetail/>} />
          <Route path ='/productsInBasket'  element={<ProductsInBasket/>} />
        </Routes>
    </div>
    </div>
  )
}

export default RouterConfig
