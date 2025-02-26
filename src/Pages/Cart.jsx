import React, { useState } from 'react'
import GameRemote from '../assets/GameRemote.jpg';
import HeadPhone from '../assets/HeadPhone.jpg';
import { HiMiniMinusSmall, HiPlusSmall } from 'react-icons/hi2';
import { IoClose } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';

const Cart = () => {

  const navigate = useNavigate();

  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  }
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const CartData = [
    { id: 1, image: GameRemote, title: "iPhone 12 Pro Max 128GB", size: "small", price: "$38" },
    { id: 2, image: HeadPhone, title: "iPhone 12 Pro Max 128GB", size: "small", price: "$38" },
    { id: 3, image: GameRemote, title: "iPhone 12 Pro Max 128GB", size: "small", price: "$38" },
    { id: 4, image: GameRemote, title: "iPhone 12 Pro Max 128GB", size: "small", price: "$38" }
  ]
  return (
    <div className=''>

      {/* Cart Heading */}
      <div className='bg-[#fffaef] flex justify-center relative'>
        <div className='absolute top-10 left-55'>
          <NavLink to='/'>Home</NavLink> / Cart
        </div>
        <p className='font-bold text-3xl my-20'>Your Cart</p>
      </div>

      {/* Cart data in table form */}
      <table className='mx-52 mt-10'>
        <thead>
          <tr className='bg-gray-200 text-sm m-8'>
            <th className='p-5'>PRODUCT</th>
            <th className='px-5'>COLOR</th>
            <th className='px-5'>SIZE</th>
            <th className='px-5'>PRICE</th>
            <th className='px-5'>QUANTITY</th>
            <th className='px-5'>TOTAL</th>
            <th className='px-5'></th>
          </tr>
        </thead>
        {
          CartData.map((item) => {
            return (
              <tbody>
                <tr className=''>
                  <td className='p-5 flex items-center gap-x-14'><img src={item.image} alt="" className='size-20 ' />{item.title}</td>
                  <td className='px-12'><p className='bg-[#e4bc87] p-2 rounded-full w-fit h-fit border border-gray-200'></p></td>
                  <td className='px-12'>{item.size}</td>
                  <td className='px-10'>{item.price}</td>
                  <td className='px-12'>
                    <span className='flex items-center gap-x-4 border border-gray-300 w-fit py-2 px-4 '>
                      <button className='text-gray-500' onClick={handleDecrement}><HiMiniMinusSmall /></button>
                      <p>{count}</p>
                      <button className='text-gray-500' onClick={handleIncrement}><HiPlusSmall /></button>
                    </span>
                  </td>
                  <td className='px-10'>$38</td>
                  <td className='px-10'><IoClose /></td>
                </tr>
              </tbody>
            )
          })
        }
      </table>

      <div className='mx-52 flex justify-between'>
        <div>
          <input type="text" placeholder='Discount Code' className='px-2 py-2.5 border border-gray-300' />
          <button className='bg-black text-white px-6 py-2.5'>Apply</button>
        </div>

        <div className='mb-28'>
          <div className='flex justify-end'>
            <button className='bg-gray-200 font-semibold px-8 py-3'>Continue Shopping</button>
          </div>
          <div className='border border-gray-300 mt-5 w-96 p-5'>
            <div className='flex justify-between py-5'>
              <p>SubTotal</p>
              <span className='text-red-600'>$365</span>
            </div>
            <hr className='text-gray-300' />
            <div className='py-5'>
              <p>Shipping</p>
              <div className='my-3'>
                <div className='py-2 flex justify-between'>
                  <div className='flex gap-x-2'>
                    <input type="radio" name='priti' className='accent-pink-500' />
                    <label htmlFor="">Free Shipping</label>
                  </div>
                  <span>+$00.00</span>
                </div>
                <div className='py-2 flex justify-between'>
                  <div className='flex gap-x-2'>
                    <input type="radio" name='priti' className='accent-pink-500' />
                    <label htmlFor="">Flat Rate</label>
                  </div>
                  <span>+$00.00</span>
                </div>
                <div className='py-2 flex justify-between'>
                  <div className='flex gap-x-2'>
                    <input type="radio" name='priti' className='accent-pink-500' />
                    <label htmlFor="">Local Delivery</label>
                  </div>
                  <span>+$00.00</span>
                </div>
              </div>
            </div>
            <div className='flex justify-between py-5 text-2xl'>
              <p>Total</p>
              <span className='text-red-600'>$365</span>
            </div>
            <div className='flex items-center'>
              {/* <NavLink> */}
              <button className='bg-black text-white px-24 py-3' onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
              {/* </NavLink> */}
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Cart