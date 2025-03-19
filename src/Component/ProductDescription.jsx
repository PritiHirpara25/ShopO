import React from 'react'

const ProductDescription = ({item}) => {
  return (
    <div className='bg-[#f8f8f8] p-4 pt-16 '>
        <div className='xl:mx-20'>
          <p className='py-3'>Description</p>
          <hr className='text-gray-300' />
          <div>
            <h3 className='pt-8 pb-3 text-xl'>Introduction</h3>
            <p className='text-gray-400'>{item.description}</p>
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
  )
}

export default ProductDescription