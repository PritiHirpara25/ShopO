import React from "react";
import logo from "../assets/logo.svg";
import { IoBagOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import CartHoverProduct from "./CartHoverProduct";
import game_remote from "../assets/GameRemote.jpg";
import { Scrollbar } from 'react-scrollbars-custom';
import { useSelector } from "react-redux";

function PrimaryNavbar({ sidebar, setSidebar }) {

  const cartData = useSelector(state => state.cart);
  const wishlistData = useSelector(state => state.wishlist);
  const navigate = useNavigate()

  return (
    <div className="container relative">
      {/* navbar */}
      <nav className="flex justify-between items-center">
        {/* hamburger menu */}
        <div className="block lg:hidden" onClick={() => setSidebar(true)}>
          <RxHamburgerMenu className="size-5" />
        </div>
        {/* logo */}
        <div className="">
          <img src={logo} alt="" />
        </div>
        {/* search bar & category*/}
        <div className="border border-gray-200 hidden lg:block">
          <input
            type="text"
            placeholder="Search Product..."
            className="border-r border-r-gray-200 outline-none px-2 text-[12px] font-semibold"
          />
          <select
            defaultValue={"All Category"}
            id="all_category"
            className="text-gray-500 text-[12px] font-semibold focus:outline-none px-6 "
          >
            <option value="All Category">All Category</option>
            <option value="Electoronics">Electoronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Glocery">Glocery</option>
          </select>
          <button className="bg-[#ffbb38] px-4 py-2 font-semibold ml-2">
            Search
          </button>
        </div>

        {/* nav-icon container */}
        <div className="flex gap-6 p-2 relative">
          {/* heart */}
          <div className="relative hidden md:block">
            <NavLink to="/wishlist">
              <CiHeart className="size-6" />
            </NavLink>
            <div className="size-5 rounded-full flex justify-center items-center font-semibold bg-[#ffbb38] absolute bottom-3 left-3">
              <span className="font-light">{wishlistData.length}</span>
            </div>
          </div>

          {/* bag */}
          <div className="group">
            <div className="relative">
              <NavLink to={"/cart"}>
                <IoBagOutline className="size-5 mt-1" />
              </NavLink>
              <div className="size-5 rounded-full flex justify-center items-center font-semibold bg-[#ffbb38] absolute bottom-3 left-2">
                <span className="font-light">{cartData.length}</span>
              </div>
            </div>

            {/* bag hover container */}
            <div className="h-[600px]  w-72 absolute z-50 -left-30 top-8 hidden group-hover:block bg-white pt-4">

              {/* horizontal ruler */}
              <hr className="border-2 border-[#ffbb38] text-[#ffbb38]" />
              {/* product div */}
              <div>

                {cartData.length === 0 ? <div className="p-4">Cart is Empty <NavLink to='/shop' className='text-[#ffbb38] hover:underline'>Shop Now</NavLink></div> :
                  <div
                    className={`overflow-y-auto pt-4 ${cartData.length >= 4 ? "max-h-[300px]" : cartData.length === 4 ? "h-[220px]" : "h-auto"
                      }`}
                    style={{ scrollbarWidth: cartData.length >= 4 ? "thin" : "none" }}
                  >

                    <div className="px-2">
                      {cartData.map((product) => (
                        <CartHoverProduct product={product} key={product.id} />
                      ))}
                    </div>
                  </div>}

              </div>

              {/* horizontal ruler */}
              <hr className="border-gray-200 mx-4" />

              {/*second div */}
              <div className="mx-4 py-4">
                {/* total price */}
                <div className="flex justify-between mt-2">
                  <p className="font-medium">Subtotal</p>
                  <p className="text-red-500 font-semibold">$365</p>
                </div>
                {/* button container */}
                <div className="flex flex-col my-4 gap-2">
                  <button className="bg-gray-300 p-4 cursor-pointer" onClick={() => navigate('/cart')}>View Cart</button>
                  <button className="bg-[#ffbb38] p-4 cursor-pointer" onClick={() => navigate('checkout')}>Checkout Now</button>
                </div>
              </div>

              {/* horizontal ruler */}
              <hr className="border-gray-200 mx-4" />

              {/* return policy */}
              <p className="text-gray-400 px-4 text-center text-sm mt-4">Get Return Within <span className="text-black">30 Days</span></p>

            </div>
          </div>


          {/* person */}
          <GoPerson className="size-5 hidden md:block" />
        </div>
      </nav>

      {/* sidebar */}
      <div
        className={`fixed inset-0 z-50 transform ${sidebar ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 linear lg:hidden`}
      >
        {sidebar && <Sidebar sidebar={sidebar} setSidebar={setSidebar} />}
      </div>

      {sidebar && (
        <div
          className={`fixed inset-0 bg-black ${sidebar ? "opacity-50" : "opacity-0"
            } transition-opacity duration-300 linear z-40 lg:hidden`}
          onClick={() => setSidebar(false)}
        ></div>
      )}
    </div>
  );
}

export default PrimaryNavbar;
