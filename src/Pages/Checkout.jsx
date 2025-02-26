import React from 'react'
import { NavLink } from 'react-router-dom'

const Checkout = () => {
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
          <button className='bg-gray-200 py-3 px-20'>Log into Your Account</button>
        </div>

        <div className='w-1/2 border mt-10'>
          <p className='text-2xl'>Billing Details</p>
          <form action="">
            <div>
              <label htmlFor="">First Name</label>
              <input type="text" className='border border-gray-200' />
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Checkout