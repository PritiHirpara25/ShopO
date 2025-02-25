import React from 'react'
import logo from '../assets/logo.svg'
import { IoBagOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";

function PrimaryNavbar() {
  return (
    <div className='border-1 border-red-500 container '>
      <nav className='flex justify-between items-center'>

        {/* logo */}
        <div className=''>
          <img src={logo} alt="" />
        </div>

        {/* search bar & category*/}
        <div className='border border-gray-200'>
          <input type="text" placeholder='Search Product...' className='border-r border-r-gray-200 outline-none px-2 text-[12px] font-semibold'/>
          <select defaultValue={"All Category"}  id="all_category" className='text-gray-500 text-[12px] font-semibold focus:outline-none'>
            <option value="All Category" >All Category</option>
            <option value="Electoronics">Electoronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Glocery">Glocery</option>
          </select>
          <button className='bg-[#ffbb38] px-4 py-2 font-semibold'>Search</button>
        </div>

        {/* nav-icon */}
        <div className='flex gap-2'>
          {/*  */}
          <div>
           <CiHeart/>
          </div>

       {/* cart */}
          <div>
            {/* bag */}
          <div className='relative'>
          <IoBagOutline />
           <div className='size-5 rounded-full flex justify-center items-center  font-semibold bg-[#ffbb38] absolute top-0 left-0 border-2 '>
              <span className=' font-light'>{0}</span>
           </div>
          </div>
          </div>          
          <GoPerson/>
        </div>

      </nav>
    </div> 
  )
}
 
export default PrimaryNavbar
