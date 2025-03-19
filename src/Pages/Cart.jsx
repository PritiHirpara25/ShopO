import React, { useState } from 'react'
import { HiMiniMinusSmall, HiPlusSmall } from 'react-icons/hi2';
import { IoClose } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';
import Footer from '../Component/Footer';
import Coupan from '../Component/Coupan';
import { useDispatch, useSelector } from 'react-redux';
import { removeToCart, incrementQuantity, decrementQuantity } from '../Redux/CartSlice';

const Cart = () => {

  const [isShipping, setIsShipping] = useState(false);

  const navigate = useNavigate();
  const cartData = useSelector(state => state.cart);
  const dispatch = useDispatch();
  // total 
  const total = cartData.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className='border'>

      {/* Cart Heading */}
      <div className='bg-[#fffaef] flex justify-center relative '>
        <div className='absolute top-10 xl:left-55'>
          <NavLink to='/'>Home</NavLink> / Cart
        </div>
        <p className='font-bold text-3xl my-20'>Your Cart</p>
      </div>

      {/* Cart data in table form */}
      <div className='overflow-auto'>
        <table className='mt-10 container mx-auto min-w-[1400px] '>
          <thead>
            <tr className='bg-gray-200 text-sm m-8 border-2 border-gray-300'>
              <th className='p-5'>PRODUCT</th>
              <th className='px-5'>COLOR</th>
              <th className='px-5'>SIZE</th>
              <th className='px-5'>PRICE</th>
              <th className='px-5'>QUANTITY</th>
              <th className='px-5'>TOTAL</th>
              <th className='px-5'></th>
            </tr>
          </thead>

          <tbody>
            {
              cartData.map((item) => {
                return (
                  <tr className='border-2 border-gray-300 hover:bg-gray-100' key={item.id}>
                    <td className='p-5 flex items-center gap-x-14'><img src={item.image} alt="" className='size-20' />{item.title}</td>
                    <td className='px-12'><p className='bg-[#e4bc87] p-2 rounded-full w-fit h-fit border border-gray-200'></p></td>
                    <td className='px-12'>{item.size}</td>
                    <td className='px-10'>₹{item.price}</td>
                    <td className='px-12'>
                      <span className='flex items-center gap-x-4 border border-gray-300 w-fit py-2 px-4 '>
                        <button className='text-gray-500 ' onClick={() => dispatch(decrementQuantity(item.id))}><HiMiniMinusSmall /></button>
                        <p>{item.quantity}</p>
                        <button className='text-gray-500 ' onClick={() => dispatch(incrementQuantity(item.id))}><HiPlusSmall /></button>
                      </span>
                    </td>
                    <td className='px-10'>₹{item.price * item.quantity}</td>
                    <td className='px-10 hover:cursor-pointer'><IoClose onClick={() => dispatch(removeToCart(item.id))} /></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

      <div className='flex flex-col sm:flex-row justify-between container mx-auto pt-10 px-5'>
        
        <div className='flex sm:block'>
          <input type="text" placeholder='Discount Code' className='px-2 py-2.5 border border-gray-300 focus:outline-none rounded-none' />
          <button className='bg-black text-white px-6 py-2.5'>Apply</button>
        </div>

        <div className='mb-28'>
          <div className='flex justify-center mt-5 sm:mt-0 sm:justify-end'>
            <button className='bg-gray-200 font-semibold px-8 py-3 cursor-pointer' onClick={() => navigate('/shop')}>Continue Shopping</button>
          </div>
          <div className='border border-gray-300 mt-5 sm:w-96 p-5'>
            <div className='flex justify-between py-5'>
              <p>SubTotal</p>
              <span className='text-red-600'>₹ {total.toFixed(2)}</span>
            </div>
            <hr className='text-gray-300' />
            <div className='py-5'>
              <p>Shipping</p>
              <div className='my-3'>
                <div className='py-2 flex justify-between'>
                  <div className='flex gap-x-2'>
                    <input type="radio" name='option' id='cart' className='cursor-pointer accent-pink-500' />
                    <label htmlFor="cart">Free Shipping</label>
                  </div>
                  <span>+₹00.00</span>
                </div>
                <div className='py-2 flex justify-between'>
                  <div className='flex gap-x-2'>
                    <input type="radio" name='option' id='cart' className='cursor-pointer accent-pink-500' />
                    <label htmlFor="cart">Flat Rate</label>
                  </div>
                  <span>+₹20.00</span>
                </div>
                <div className='py-2 flex justify-between'>
                  <div className='flex gap-x-2'>
                    <input type="radio" name='option' id='cart' className='cursor-pointer accent-pink-500' />
                    <label htmlFor="cart">Local Delivery</label>
                  </div>
                  <span>+₹10.00</span>
                </div>
              </div>
            </div>
            <div className='flex justify-between py-5 text-2xl'>
              <p>Total</p>
              <span className='text-red-600'>₹ {total.toFixed(2)}</span>
            </div>
            <div className='flex items-center'>
              {/* <NavLink> */}
              <button className='bg-black text-white px-10 sm:px-24 py-3 cursor-pointer' onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
              {/* </NavLink> */}
            </div>
          </div>
        </div>

      </div>

      <div className=''>
        <Coupan />
        <Footer />
      </div>

    </div >
  )
}

export default Cart