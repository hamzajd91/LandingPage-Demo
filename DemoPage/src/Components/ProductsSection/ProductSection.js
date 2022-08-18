import React from 'react'
import "./ProductSection.css"
import ProductCard from "./ProcuctCard"
function ProductSection() {
  return (
    <div className='container ProductsSection'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
  )
}

export default ProductSection