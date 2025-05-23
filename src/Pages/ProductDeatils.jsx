import React from 'react'
import { NavLink } from 'react-router-dom'
import productdetails1 from '../assets/product-details-1.png'
import Coupan from '../Component/Coupan'
import Footer from '../Component/Footer'
import ProductDetailsCard from '../Component/ProductDetailsCard'
import { useSelector } from 'react-redux'
import ProductDescription from '../Component/ProductDescription'

const ProductDeatils = () => {

  const ProductDetailsData = useSelector(state => state.productdetails)
  console.log("productdetails:", ProductDetailsData);

  return (
    <div className=''>

      <div className='bg-white pb-14 p-2'>

        <div className='container mx-auto my-10'>
          <NavLink to='/'>Home / Single Product</NavLink>
        </div>

        <div className=''>
          <ProductDetailsCard item={ProductDetailsData} />
        </div>

        {/* Description */}
        <div>
          <ProductDescription item={ProductDetailsData}/>
        </div>

      </div>


      <div className='mt-36'>
        <Coupan />
        <Footer />
      </div>

    </div>
  )
}

export default ProductDeatils