import React from 'react'
import PrimaryNavbar from './PrimaryNavbar'
import SecondryNavbar from './SecondryNavbar'
import { Outlet } from 'react-router-dom'

function Navbar({ sidebar, setSidebar }) {

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
