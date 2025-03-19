import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Coupan from '../Component/Coupan';
import Footer from '../Component/Footer';
import { useSelector } from 'react-redux';

const Checkout = () => {

  const navigate = useNavigate();

  const cartData = useSelector(state => state.cart);

  // total 
  const total = cartData.reduce((sum, item) => sum + item.price , 0);

  return (
    <div>

      {/* Checkout Heading */}
      <div className='bg-[#fffaef] flex justify-center relative'>
        <div className='absolute top-10 xl:left-55'>
          <NavLink to='/'>Home</NavLink> / Cart
        </div>
        <p className='font-bold text-3xl my-20'>Checkout</p>
      </div>

      <div className='container mx-auto'>

        <div className='mt-5 flex justify-center px-2'>
          <button className='bg-gray-200 py-3 px-16  cursor-pointer' onClick={() => navigate('/login')}>Log into Your Account</button>
        </div>

        <div className='flex flex-col lg:flex-row gap-x-8 mb-20 px-8'>

          <div className=' mt-10 w-full'>
            <p className='text-2xl'>Billing Details</p>
            <form action="" className=''>
              <div className='flex flex-col sm:flex-row gap-x-10'>
                <div className='my-3'>
                  <label htmlFor="">First Name</label><br />
                  <input type="text" placeholder='Enter Your First Name' className='border border-gray-200 py-2.5 my-2 w-64 px-4 focus:outline-none' />
                </div>
                <div className='my-3'>
                  <label htmlFor="">Last Name</label><br />
                  <input type="text" placeholder='Enter Your Last Name' className='border border-gray-200 py-2.5 my-2 w-64 px-4 focus:outline-none' />
                </div>
              </div>
              <div className='flex flex-col sm:flex-row gap-x-10'>
                <div className='my-3'>
                  <label htmlFor="">Email Address</label><br />
                  <input type="text" placeholder='name@123gmail.com' className='border border-gray-200 py-2.5 my-2 w-64 px-4 focus:outline-none' />
                </div>
                <div className='my-3'>
                  <label htmlFor="">Phone Number</label><br />
                  <input type="text" placeholder='+91 **********' className='border border-gray-200 py-2.5 my-2 w-64 px-4 focus:outline-none' />
                </div>
              </div>
              <div className='my-3'>
                <label htmlFor="">Country</label><br />
                <select name="" id="" className='border border-gray-200 py-2.5 w-full my-2 px-4 focus:outline-none'>
                  <option value="">USA</option>
                  <option value="">Bhutan</option>
                  <option value="">India</option>
                  <option value="">Brazil</option>
                  <option value="">Canada</option>
                  <option value="">Singapore</option>
                  <option value="">UK</option>
                  <option value="">New Zealand</option>
                </select>
              </div>
              <div className='my-3'>
                <label htmlFor="">Address</label><br />
                <input type="text" placeholder='Your Address Here' className='my-2 border border-gray-200 py-2.5 w-full px-4 focus:outline-none' />
              </div>
              <div className='flex flex-col sm:flex-row gap-x-10'>
                <div className='my-3'>
                  <label htmlFor="">Town / city</label><br />
                  <input type="text" placeholder='Town / City' className='w-64 my-2 border border-gray-200 py-2.5 px-4 focus:outline-none' />
                </div>
                <div className='my-3'>
                  <label htmlFor="">Postcode / Zip</label><br />
                  <input type="text" placeholder='Postcode / Zip' className='w-64 my-2 border border-gray-200 py-2.5 px-4 focus:outline-none' />
                </div>
              </div>
            </form>
          </div>

          <div className='w-full mt-10'>
            <p className='text-2xl'>Order Summary</p>
            <div className='border border-gray-300 p-6 my-5'>
              <div className='flex justify-between my-3'>
                <p>PRODUCT</p>
                <p>TOTAL</p>
              </div>
              <hr className='text-gray-300 my-4' />
              <div className='my-5'>
                {cartData.map((item) => {
                  return (
                    <div className='my-2 flex items-center justify-between'>
                      <div>
                        <p>{item.title}</p>
                        <p className='text-gray-400 text-sm py-1 line-clamp-1'>{item.description}</p>
                      </div>
                      <p>₹{item.price}</p>
                    </div>
                  )
                })}
              </div>
              <hr className='text-gray-300 my-4' />
              <div className='flex items-center justify-between text-2xl'>
                <p>Total</p>
                <p className='text-red-600'>₹{total.toFixed(2)}</p>
              </div>
              <div className='my-6'>
                <button onClick={() => navigate('/payment')} className='bg-black text-white w-full py-3 font-semibold cursor-pointer'>Make Payment</button>
              </div>
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

export default Checkout