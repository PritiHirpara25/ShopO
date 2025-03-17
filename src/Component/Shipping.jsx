import React from 'react'
import quality from '../assets/quality.svg'
import return_icon from '../assets/return_icon.svg'
import secure from '../assets/secure.svg'
import shipping from '../assets/shipping.svg'

function Shipping() {
  return (
    <div className='container mx-auto flex justify-between px-8 bg-white p-8 text-2xl my-14'>
      {/* shipping */}
      <div className='flex gap-4 items-center'>
        <div>
          <img src={shipping} alt="" />
        </div>
        <div className=''>
          <p className='text-md font-semibold'>Free Shiping</p>
          <p className='text-sm text-gray-400'>When ordering over $100</p>
        </div>
      </div>

        {/* return */}
        <div className='flex gap-4 items-center'>
        <div>
          <img src={return_icon} alt="" />
        </div>
        <div className=''>
          <p className='text-md font-semibold'>Free Return</p>
          <p className='text-sm text-gray-400'>Get Return Within 30 days</p>
        </div>
      </div>

        {/* secure */}
        <div className='flex gap-4 items-center'>
        <div>
          <img src={secure} alt="" />
        </div>
        <div className=''>
          <p className='text-md font-semibold'>Secure Payment</p>
          <p className='text-sm text-gray-400'>100% Secure Online Payment</p>
        </div>
      </div>

        {/* quality */}
        <div className='flex gap-4 items-center'>
        <div>
          <img src={quality} alt="" />
        </div>
        <div className=''>
          <p className='text-md font-semibold'>Best quality</p>
          <p className='text-sm text-gray-400'>Original Product Guarenteed</p>
        </div>
      </div>
    </div>
  )
}

export default Shipping
