import React, { useState } from 'react'
import GameRemote from '../assets/GameRemote.jpg'
import { NavLink } from 'react-router-dom'
import Home from './Home'
import productdetails1 from '../assets/product-details-1.png'
import { MdOutlineStarPurple500 } from 'react-icons/md'
import { HiMiniMinusSmall, HiPlusSmall } from "react-icons/hi2";
import { BsHeart } from "react-icons/bs";
import { IoIosFlag } from "react-icons/io";
import Coupan from '../Component/Coupan'
import Footer from '../Component/Footer'

const ProductDeatils = () => {

  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  }
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const ProductData = [{ id: 1, image: productdetails1, title: "Samsung Galaxy Z Fold3 5G 3 colors in 512GB", discount: "$9.99", price: "$6.99" }]

  return (
    <div className='mt-10'>

      <div>
        <NavLink to='/'>Home / Single Product</NavLink>
      </div>

      <div className='mb-16'>
        {ProductData.map((item) => {
          return (
            <>
              <div className='flex' key={item.id}>

                {/* image */}
                <div>
                  <div className='border relative w-fit p-22 border-gray-300'>
                    <img src={item.image} className='size-96' alt="" />
                    <div className='absolute top-5 left-5 bg-[#ffbb38] rounded-full px-4 py-7 text-2xl'>-50%</div>
                  </div>
                  <div className='flex mt-2'>
                    <img src={productdetails1} className='size-24 border border-gray-300 p-2 m-2' alt="" />
                    <img src={productdetails1} className='size-24 border border-gray-300 p-2 m-2' alt="" />
                    <img src={productdetails1} className='size-24 border border-gray-300 p-2 m-2' alt="" />
                    <img src={productdetails1} className='size-24 border border-gray-300 p-2 m-2' alt="" />
                    <img src={productdetails1} className='size-24 border border-gray-300 p-2 m-2' alt="" />
                  </div>
                </div>

                {/* details */}
                <div className='mx-10 mt-2'>
                  <span className='text-sm text-gray-400'>MOBILE PHONES</span>
                  <h1 className='text-xl py-2'>{item.title}</h1>
                  <div className='flex mb-2'>
                    <MdOutlineStarPurple500 className='text-[#ffbb38] text-xl' />
                    <MdOutlineStarPurple500 className='text-[#ffbb38] text-xl' />
                    <MdOutlineStarPurple500 className='text-[#ffbb38] text-xl' />
                    <MdOutlineStarPurple500 className='text-[#ffbb38] text-xl' />
                    <MdOutlineStarPurple500 className='text-[#ffbb38] text-xl' />
                    <p className='pl-2 text-sm'>6 Reviews</p>
                  </div>
                  <div className='py-4 flex items-center gap-x-3'>
                    <p className='pt-2 text-gray-500'>{item.discount}</p>
                    <p className='text-2xl text-red-600 font-medium'>{item.price}</p>
                  </div>
                  <div className='my-4'>
                    <p className='max-w-[450px] text-gray-400'>It is a long established fact that a reader will be distracted by the readable there content of a page when looking at its layout.</p>
                  </div>
                  <div>
                    <p>COLOR</p>
                    <div className='flex gap-x-2 my-4'>
                      <p className='bg-[#ffbc63] p-2 rounded-full w-fit border border-gray-200'></p>
                      <p className='bg-[#649eff] p-2 rounded-full w-fit border border-gray-200'></p>
                      <p className='bg-[#ffffff] p-2 rounded-full w-fit border border-gray-200'></p>
                      <p className='bg-[#ff7173] p-2 rounded-full w-fit border border-gray-200'></p>
                    </div>
                  </div>
                  <div>
                    <p>SIZE</p>
                    <select className='border border-gray-300 focus:outline-none py-1.5 px-2 w-96 my-4'>
                      <option value="">Small</option>
                      <option value="">Medium</option>
                      <option value="">Large</option>
                      <option value="">Extra Large</option>
                    </select>
                  </div>
                  <div className='flex items-center my-4 gap-x-2'>
                    <div className='flex items-center gap-x-4 border border-gray-300 w-fit py-2 px-4 '>
                      <button className='text-gray-500' onClick={handleDecrement}><HiMiniMinusSmall /></button>
                      <p>{count}</p>
                      <button className='text-gray-500' onClick={handleIncrement}><HiPlusSmall /></button>
                    </div>
                    <div className='border border-gray-300 py-3 px-3'>
                      <BsHeart />
                    </div>
                    <div className='bg-black text-white py-2 px-18 flex justify-center'>
                      <button>Add To Cart</button>
                    </div>
                  </div>
                  <div className='my-5 text-sm space-y-2'>
                    <p>Category : <span className='text-gray-500'>Kitchen</span></p>
                    <p>Tags : <span className='text-gray-500'>Beer , foamer</span></p>
                    <p>SKU : <span className='text-gray-500'>KE-91039</span></p>
                  </div>
                  <div className='text-sm text-red-600 font-medium flex items-center gap-x-2 my-4'>
                    <p><IoIosFlag /></p>
                    <p>Report This Item</p>
                  </div>
                  <div>
                    <p>Share This</p>

                  </div>
                </div>

              </div>
            </>
          )
        })}
      </div>

      {/* Description */}
      <div className='bg-[#f8f8f8] pb-20'>
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