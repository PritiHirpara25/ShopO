import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Checkout = () => {

  const navigate = useNavigate();

  return (
    <div>

      {/* Checkout Heading */}
      <div className='bg-[#fffaef] flex justify-center relative'>
        <div className='absolute top-10 left-55'>
          <NavLink to='/'>Home</NavLink> / Cart
        </div>
        <p className='font-bold text-3xl my-20'>Checkout</p>
      </div>

      <div className='mx-52'>

        <div className='mt-5'>
          <button className='bg-gray-200 py-3 px-20 cursor-pointer'>Log into Your Account</button>
        </div>

        <div className='flex gap-x-8 mb-20'>

          <div className='w-1/2 mt-10'>
            <p className='text-2xl'>Billing Details</p>
            <form action="" className='text-gray-400'>
              <div className='flex gap-x-10'>
                <div className='my-3'>
                  <label htmlFor="">First Name</label><br />
                  <input type="text" placeholder='Enter Your First Name' className='border border-gray-200 py-2.5 my-2 w-64 px-4' />
                </div>
                <div className='my-3'>
                  <label htmlFor="">Last Name</label><br />
                  <input type="text" placeholder='Enter Your Last Name' className='border border-gray-200 py-2.5 my-2 w-64 px-4' />
                </div>
              </div>
              <div className='flex gap-x-10'>
                <div className='my-3'>
                  <label htmlFor="">Email Address</label><br />
                  <input type="text" placeholder='name@123gmail.com' className='border border-gray-200 py-2.5 my-2 w-64 px-4' />
                </div>
                <div className='my-3'>
                  <label htmlFor="">Phone Number</label><br />
                  <input type="text" placeholder='+91 **********' className='border border-gray-200 py-2.5 my-2 w-64 px-4' />
                </div>
              </div>
              <div className='my-3'>
                <label htmlFor="">Country</label><br />
                <select name="" id="" className='border border-gray-200 py-2.5 w-full my-2 px-4'>
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
                <input type="text" placeholder='Your Address Here' className='my-2 border border-gray-200 py-2.5 w-full px-4' />
              </div>
              <div className='flex gap-x-10'>
                <div className='my-3'>
                  <label htmlFor="">Town / city</label><br />
                  <input type="text" placeholder='Town / City' className='w-64 my-2 border border-gray-200 py-2.5 px-4' />
                </div>
                <div className='my-3'>
                  <label htmlFor="">Postcode / Zip</label><br />
                  <input type="text" placeholder='Postcode / Zip' className='w-64 my-2 border border-gray-200 py-2.5 px-4' />
                </div>
              </div>
            </form>
          </div>

          <div className='w-1/2 mt-10'> px-4
            <p className='text-2xl'>Order Summary</p>
            <div className='border border-gray-300 p-6 my-5'>
              <div className='flex justify-between my-3'>
                <p>PRODUCT</p>
                <p>TOTAL</p>
              </div>
              <hr className='text-gray-300 my-4' />
              <div className='my-5'>
                <div className='my-2 flex items-center justify-between'>
                  <div>
                    <p>Apple Watch</p>
                    <p className='text-gray-400 text-sm py-1'>64 GB , Black , 44mm , Chain Belt</p>
                  </div>
                  <p>$38</p>
                </div>
                <div className='my-2 flex items-center justify-between'>
                  <div>
                    <p>Apple Watch</p>
                    <p className='text-gray-400 text-sm py-1'>64 GB , Black , 44mm , Chain Belt</p>
                  </div>
                  <p>$38</p>
                </div>
                <div className='my-2 flex items-center justify-between'>
                  <div>
                    <p>Apple Watch</p>
                    <p className='text-gray-400 text-sm py-1'>64 GB , Black , 44mm , Chain Belt</p>
                  </div>
                  <p>$38</p>
                </div>
              </div>
              <hr className='text-gray-300 my-4' />
              <div className='my-5 flex justify-between'>
                <p>SUBTOTAL</p>
                <p>$365</p>
              </div>
              <div className='my-5'>
                <div className='flex justify-between items-center'>
                  <p className='text-gray-400 text-sm'>SHIPPING</p>
                  <p>+$0</p>
                </div>
                <p>Free Shipping</p>
              </div>
              <hr className='text-gray-300 my-4' />
              <div className='flex items-center justify-between text-2xl'>
                <p>Total</p>
                <p className='text-red-600'>$365</p>
              </div>
              {/* <div className='my-5'>
                <div>
                  <div className='space-x-5 my-2'>
                    <input type="radio" name='option' className='accent-pink-500' />
                    <label htmlFor="" className='text-xl'>Direct Bank Transfer</label>
                  </div>
                  <p className='pl-8 text-gray-400'>Make your payment directly into our bank account. Please use your Order ID as the payment reference.</p>
                </div>
                <div className='space-x-5 my-5'>
                  <input type="radio" name='option' className='accent-pink-500' />
                  <label htmlFor="" className='text-xl'>Cash on Delivery</label>
                </div>
                <div className='space-x-5 my-5'>
                  <input type="radio" name='option' className='accent-pink-500' />
                  <label htmlFor="" className='text-xl'>Credit/Debit Cards or Paypal</label>
                </div>
              </div> */}
              <div className='my-6'>
                <button onClick={() => navigate('/payment')} className='bg-black text-white w-full py-3 font-semibold'>Make Payment</button>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Checkout