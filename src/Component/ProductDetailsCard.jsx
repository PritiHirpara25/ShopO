import { useState } from 'react';
import { BsHeart } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { HiMiniMinusSmall, HiPlusSmall } from "react-icons/hi2";
import { IoIosFlag } from "react-icons/io";
import { MdOutlineStarPurple500 } from 'react-icons/md';
import productdetails1 from '../assets/product-details-1.png';


const ProductDetailsCard = ({ item }) => {

  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  }
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const ratingStar = [];
  for (let i = 1; i <= Math.ceil(item.rating.rate); i++) {
    ratingStar.push(<MdOutlineStarPurple500 className='text-[#ffbb38] text-xl' />)
  }

  return (
    <div className=''>
      <div className='flex flex-col lg:flex-row container mx-auto '>

        {/* image */}
        <div>
          <div className='border relative p-22 border-gray-300 '>
            <img src={item.image} className='size-40 sm:size-72 md:size-80 ' alt="" />
            <div className='absolute top-5 left-5 bg-[#ffbb38] rounded-full px-4 py-7 text-2xl'>-50%</div>
          </div>
          <div className='flex flex-wrap mt-2'>
            <img src={productdetails1} className='size-24 border border-gray-300 p-2 m-2' alt="" />
            <img src={productdetails1} className='size-24 border border-gray-300 p-2 m-2' alt="" />
            <img src={productdetails1} className='size-24 border border-gray-300 p-2 m-2' alt="" />
            <img src={productdetails1} className='size-24 border border-gray-300 p-2 m-2' alt="" />
            <img src={productdetails1} className='size-24 border border-gray-300 p-2 m-2' alt="" />
          </div>
        </div>

        {/* details */}
        <div className='p-4 md:mx-10 mt-2'>
          <span className='text-sm text-gray-400 uppercase'>{item.category}</span>
          <h1 className='text-xl py-2'>{item.title}</h1>
          <div className='flex mb-2'>
            {
              ratingStar.map((item) => {
                return (
                  item
                )
              })
            }
            <p className='pl-2 text-sm'>{Math.ceil(item.rating.rate)}</p>
          </div>
          <div className='py-4 flex items-center gap-x-3'>
            <del className='pt-2 text-gray-500'>7%</del>
            <p className='text-2xl text-red-600 font-medium'>₹{item.price}</p>
          </div>
          <div className='my-4'>
            <p className='max-w-[450px] text-gray-400'>{item.description}</p>
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
            <select className='border border-gray-300 focus:outline-none py-1.5 px-2 md:w-96 my-4'>
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
            <div className='bg-black text-white p-2 md:px-18 flex justify-center'>
              <button>Add To Cart</button>
            </div>
          </div>
          <div className='my-5 text-sm space-y-2'>
            <p>Category : <span className='text-gray-500'>{item.category}</span></p>
            <p>Tags : <span className='text-gray-500'>Beer , foamer</span></p>
            <p>SKU : <span className='text-gray-500'>KE-91039</span></p>
          </div>
          <div className='text-sm text-red-600 font-medium flex items-center gap-x-2 my-4'>
            <p><IoIosFlag /></p>
            <p>Report This Item</p>
          </div>
          <div className='flex items-center gap-2'>
            <p>Share This</p>
            <p><GrFacebookOption className='text-indigo-700' /></p>
            <p><FaPinterest className='text-red-600' /></p>
            <p><FaTwitter className='text-cyan-400' /></p>
          </div>
        </div>



      </div>
    </div>
  )
}

export default ProductDetailsCard