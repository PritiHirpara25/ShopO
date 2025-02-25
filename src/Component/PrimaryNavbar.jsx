import React from 'react'
import logo from '../assets/logo.svg'

function PrimaryNavbar() {
  return (
    <div className='border-1 '>
      <nav>
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
        </div>
      </nav>
    </div> 
  )
}

export default PrimaryNavbar
