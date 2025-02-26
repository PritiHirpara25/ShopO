import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoChevronDownOutline } from "react-icons/io5";
import { CiMobile4 } from "react-icons/ci";
import { MdChevronRight } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { IoCarOutline } from "react-icons/io5";
import { PiArmchairThin } from "react-icons/pi";
import { CiBasketball } from "react-icons/ci";
import { PiCoffeeThin } from "react-icons/pi";
import { PiTShirtThin } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function SecondryNavbar() {
  const [toggleCategory, setToggleCategory] = useState(false);
  console.log(toggleCategory);
  return (
    <div className="bg-[#ffbb38]">
      <nav className="container flex justify-between items-center">
        {/* All Category */}
        <div className="relative rounded-lg">

          {/* catorgy-toggle button */}
          <div className="absolute w-60 z-10 -top-4 flex justify-between items-center gap-8 bg-white py-2 pb-6 px-4 rounded-md " onClick={()=>setToggleCategory((prev)=>!prev)}>
            <div className="flex gap-2 items-center">
              <RxHamburgerMenu />
              <p>All Categories</p>
            </div>
            <IoChevronDownOutline />
          </div>

          {/* toggle-category container */}

          <div className={`w-60 mt-4 text-sm absolute z-20 bg-white  top-5 rounded-md ${toggleCategory?"visible":"hidden"}`}>
            {/* mobile & laptop */}
            <div className="flex justify-between items-center py-4 hover:bg-yellow-200">
              <div className="flex justify-between items-center gap-4">
                <CiMobile4 className="size-6" />
                <p>Mobile & Laptops</p>
              </div>
              <MdChevronRight />
            </div>

            {/* gaming Entertainment */}
            <div className="flex justify-between items-center py-4 hover:bg-yellow-200">
              <div className="flex justify-between items-center gap-4">
                <IoGameControllerOutline className="size-6" />
                <p>Gaming Entertainment</p>
              </div>
              <MdChevronRight />
            </div>

            {/* image & video */}
            <div className="flex justify-between items-center py-4 hover:bg-yellow-200">
              <div className="flex justify-between items-center gap-4">
                <CiCamera className="size-6" />
                <p>Camera & Vieo</p>
              </div>
              <MdChevronRight />
            </div>

            {/* vehicles */}
            <div className="flex justify-between items-center py-4 hover:bg-yellow-200">
              <div className="flex justify-between items-center gap-4">
                <IoCarOutline className="size-6" />
                <p>Vehicles</p>
              </div>
              <MdChevronRight />
            </div>

            {/* furnitures */}
            <div className="flex justify-between items-center py-4 hover:bg-yellow-200">
              <div className="flex justify-between items-center gap-4">
                <PiArmchairThin className="size-6" />
                <p>Furnitures</p>
              </div>
              <MdChevronRight />
            </div>

            {/* sports */}
            <div className="flex justify-between items-center py-4 hover:bg-yellow-200">
              <div className="flex justify-between items-center gap-4">
                <CiBasketball className="size-6" />
                <p>Sports</p>
              </div>
              <MdChevronRight />
            </div>

            {/* food & drinks */}
            <div className="flex justify-between items-center py-4 hover:bg-yellow-200">
              <div className="flex justify-between items-center gap-4">
                <PiCoffeeThin className="size-6" />
                <p>Food & Drinks</p>
              </div>
              <MdChevronRight />
            </div>

            {/* fashion Accessories */}
            <div className="flex justify-between items-center py-4 hover:bg-yellow-200">
              <div className="flex justify-between items-center gap-4">
                <PiTShirtThin className="size-6" />
                <p>Fashion Accessories</p>
              </div>
              <MdChevronRight />
            </div>
          </div>
        </div>

        {/* nav-link container */}
        <div>
          <ul className="flex gap-8">
           <NavLink to="/"> <li>Home</li></NavLink>
           <NavLink to="/shop"> <li>Shop</li></NavLink>
           <NavLink to="/login"> <li>Login</li></NavLink>
           <NavLink to="/signup"><li>SignUP</li></NavLink>
          </ul>
        </div>

        {/* become seller button */}
        <div className="flex justify-between items-center gap-4 bg-black text-white px-4 py-2">
          <button>Become a Seller</button>
          <MdChevronRight />
        </div>
      </nav>
    </div>
  );
}

export default SecondryNavbar;
