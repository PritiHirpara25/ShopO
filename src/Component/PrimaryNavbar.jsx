import React from 'react'
import logo from '../assets/logo.svg'
import { IoBagOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";

function PrimaryNavbar() {
  return (
    <div className='border-1 '>
      <nav className='flex justify-between items-center'>
        {/* logo */}
        <div className=''>
          <img src={logo} alt="" />
        </div>

        {/* search bar & category*/}
        <div>
          <input type="text" placeholder='Search Product...' className='border-r border-r-gray-200 outline-none '/>
          <select defaultValue={"All Category"}  id="all_category" >
            <option value="All Category" >All Category</option>
            <option value="Electoronics">Electoronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Glocery">Glocery</option>
          </select>
          <button className=''>Search</button>
        </div>

        {/* nav-icon */}
        <div className='flex gap-2'>
          <CiHeart/>
          <IoBagOutline/>
          <GoPerson/>
        </div>
      </nav>
    </div> 
  )
}

export default PrimaryNavbar
