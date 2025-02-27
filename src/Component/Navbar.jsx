import React from 'react'
import PrimaryNavbar from './PrimaryNavbar'
import SecondryNavbar from './SecondryNavbar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <div>
        <PrimaryNavbar sidebar={sidebar} setSidebar={setSidebar} />
        <SecondryNavbar />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default Navbar
