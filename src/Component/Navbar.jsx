import React from 'react'
import PrimaryNavbar from './PrimaryNavbar'
import SecondryNavbar from './SecondryNavbar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <div className=''>
        <PrimaryNavbar sidebar={sidebar} setSidebar={setSidebar} />
        <SecondryNavbar />
      </div>
      <div className='bg-[#f8f8f8]'>
        <Outlet />
      </div>
    </>
  )
}

export default Navbar
