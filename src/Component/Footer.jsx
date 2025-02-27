import React from 'react'
import logo from '../assets/logo.svg'
import payment_getways from '../assets/payment_getways.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className=' bg-white container'>
      {/* logo */}
      <div className='flex justify-center mt-10'>
        <img src={logo} alt="" />
      </div>

      {/* links */}
      <div className='grid grid-cols-4 gap-16 border-y border-gray-300 mt-8 py-8'>
        {/* about us */}
        <div className='flex flex-col gap-4 px-4 '>
          <h6 className='font-medium '>About Us</h6>
          <p className='text-sm text-gray-500 word-spacing-2xl leading-relaxed'>We know there are a lot of threa developers our but we pride into a firm in the industry.</p>
        </div>

        {/* feature */} 
        <div className='flex flex-col gap-4'>
          <h6 className='font-medium '>Feature</h6>
          <div className='flex flex-col gap-4'>
          <a className='footer_link'>About us</a>
          <a className='footer_link'>Tearms Condition</a>
          <a className='footer_link'>Best Products</a>
          </div>
        </div>

         {/* General Links */}
         <div className='flex flex-col gap-4'>
          <h6 className='font-medium '>General Links</h6>
          <div className='flex flex-col gap-4'>
          <a className='footer_link'>Blog</a>
          <a className='footer_link'>Traking Order</a>
          <a className='footer_link'>Become Seller</a>
          </div>
        </div>

          {/* Helpful */}
         <div className='flex flex-col gap-4'>
          <h6 className='font-medium '>Helpful</h6>
          <div className='flex flex-col gap-4'>
          <a className='footer_link'>Flash Sale</a>
          <a className='footer_link'>FAQ</a>
          <a className='footer_link'>Support</a>
          </div>
        </div>

      </div>

      {/* All Rights container */}
      <div className='container flex justify-between mt-4'>
          {/* first container */}
          <div className='flex items-center gap-4'>
          <FaInstagram className='text-gray-500'/>
          <FaFacebookF className='text-gray-500'/>
          <FaYoutube className='text-gray-500'/>
          <p><span className='text-gray-400'>@2025 </span>Quomodosoft <span className='text-gray-400'> All Rights reserved</span></p>
          </div>
          {/* second container */}
          <img src={payment_getways} alt="" />
      </div>


    </div>
  )
}

export default Footer
