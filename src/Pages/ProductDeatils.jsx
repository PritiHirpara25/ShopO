import React from 'react'
import { NavLink } from 'react-router-dom'
import productdetails1 from '../assets/product-details-1.png'
import Coupan from '../Component/Coupan'
import Footer from '../Component/Footer'
import ProductDetailsCard from '../Component/ProductDetailsCard'

const ProductDeatils = () => {

  const ProductData = [{ id: 1, image: productdetails1, title: "Samsung Galaxy Z Fold3 5G 3 colors in 512GB", discount: "$9.99", price: "$6.99" }]

  return (
    <div className=''>

      <div className='bg-white pb-14'>

        <div className='container mx-auto my-10'>
          <NavLink to='/'>Home / Single Product</NavLink>
        </div>

        <div className=''>
          {ProductData.map((item, index) => {
            return (
              <>
                <ProductDetailsCard key={index} item={item} />
              </>
            )
          })}
        </div>
      </div>

      {/* Description */}
      <div className='bg-[#f8f8f8] pb-20 pt-16'>
        <div className='mx-52'>
          <p className='py-3'>Description</p>
          <hr className='text-gray-300' />
          <div>
            <h3 className='pt-8 pb-3 text-xl'>Introduction</h3>
            <p className='text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting, remaining essentially unchanged. It wasn’t popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum to make a type specimen book.</p>
          </div>
          <div className=''>
            <h3 className='pt-8 pb-3 text-xl'>Features:</h3>
            <div className='text-gray-400 space-y-2'>
              <li>slim body with metal cover</li>
              <li>latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
              <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
              <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard, touchpad with gesture support</li>
            </div>
          </div>
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