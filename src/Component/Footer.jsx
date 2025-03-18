import React from 'react'
import logo from '../assets/logo.svg'
import payment_getways from '../assets/payment_getways.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-white'>
      <div className='mx-auto container '>
        {/* logo */}
        <div className='flex justify-center py-14'>
          <img src={logo} alt="" />
        </div>

        {/* links */}
        <div className='flex items-center flex-col sm:flex-row  sm:justify-between gap-16  border-y border-gray-300 py-8 '>
          {/* about us */}
          <div className='flex flex-col gap-4 sm:px-4 max-w-36 '>
            <h6 className='font-medium '>About Us</h6>
            <p className='text-[12px] text-gray-500 word-spacing-2xl leading-relaxed'>We know there are a lot of threa developers our but we pride into a firm in the industry.</p>
          </div> 

          {/* feature */}
          <div className='flex flex-col gap-4 min-w-36 '>
            <h6 className='font-medium '>Feature</h6>
            <div className='flex flex-col gap-4 text-gray-500'>
              <a className='footer_link'>About us</a>
              <a className='footer_link'>Tearms Condition</a>
              <a className='footer_link'>Best Products</a>
            </div>
          </div>

          {/* General Links */}
          <div className='flex flex-col gap-4 min-w-36 '>
            <h6 className='font-medium '>General Links</h6>
            <div className='flex flex-col gap-4 text-gray-500'>
              <a className='footer_link'>Blog</a>
              <a className='footer_link'>Traking Order</a>
              <a className='footer_link'>Become Seller</a>
            </div>
          </div>

          {/* Helpful */}
          <div className='flex flex-col gap-4 min-w-36 '>
            <h6 className='font-medium '>Helpful</h6>
            <div className='flex flex-col gap-4 text-gray-500'>
              <a className='footer_link'>Flash Sale</a>
              <a className='footer_link'>FAQ</a>
              <a className='footer_link'>Support</a>
            </div>
          </div>

        </div>

        {/* All Rights container */}
        <div className='container flex flex-col gap-2 md:flex-row justify-between my-4'>
          {/* first container */}
          <div className='flex items-center sm:gap-4 justify-between px-2'>
            <div className='flex items-center gap-2'>
            <FaInstagram className='text-gray-500' />
            <FaFacebookF className='text-gray-500' />
            <FaYoutube className='text-gray-500' />
            </div>
            <p className='text-[12px] sm:text-sm'><span className='text-gray-400'>@2025 </span>Quomodosoft <span className='text-gray-400'> All Rights reserved</span></p>
          </div>
          {/* second container */} 
          <img src={payment_getways} alt="" className='w-fit'/>
        </div>


      </div>
    </div>
  )
}

export default Footer
