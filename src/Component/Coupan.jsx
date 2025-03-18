import React from 'react'
import coupn_banner from '../assets/coupn_banner.jpg'

function Coupan() {
  return (
    <div className='h-[307px] mt-8 bg-cover bg-no-repeat flex justify-center items-center' style={{backgroundImage:`url(${coupn_banner})`}}>
      <div className=''>
        <h2 className='text-xl sm:text-3xl font-bold text-center'>Get <span className='text-[#ffbb38]'>20% </span>Off Discount Coupon</h2>
        <p className='text-center text-md sm:text-lg font-normal mt-2'>by Subscribe our Newsletter</p>
        <div className=' mt-8 mx-2 bg-white flex justify-between '>
          <input type="email" className='outline-none px-2 ' placeholder='EMAIL ADDRESS'/>
          <button className='bg-[#ffbb38] p-0.5 sm:p-3'>Get The Coupon</button>
        </div>
      </div>
    </div>
  )
}

export default Coupan
