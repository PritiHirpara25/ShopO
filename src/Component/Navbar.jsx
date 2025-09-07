import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import PrimaryNavbar from './PrimaryNavbar';
import SecondryNavbar from './SecondryNavbar';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <div className=''>
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
