import React from "react";
import logo from "../assets/logo.svg";
import { IoBagOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";

function PrimaryNavbar({ sidebar, setSidebar }) {
  return (
    <div className="container relative border border-red-500">
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
        <div className="flex gap-4 p-2">
          {/* heart */}
          <div className="relative hidden md:block">
            <CiHeart className="size-6" />
            <div className="size-5 rounded-full flex justify-center items-center font-semibold bg-[#ffbb38] absolute bottom-3 left-3">
              <span className="font-light">{0}</span>
            </div>
          </div>

          {/* bag */}
          <div>
            <div className="relative">
             <NavLink to={'/cart'}><IoBagOutline className="size-5 mt-1" /></NavLink> 
              <div className="size-5 rounded-full flex justify-center items-center font-semibold bg-[#ffbb38] absolute bottom-3 left-2">
                <span className="font-light">{0}</span>
              </div>
            </div>
          </div>

          {/* person */}
          <GoPerson className="size-5 hidden md:block" />
        </div>
      </nav>

      {/* sidebar */}
      <div className={`fixed inset-0 z-50 transform ${sidebar ? 'translate-x-0' :'-translate-x-full'} transition-transform duration-300 linear lg:hidden`}>
      {sidebar && <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>}
      </div>

      {sidebar && (
        <div
          className={`fixed inset-0 bg-black ${sidebar ? "opacity-50":"opacity-0"} transition-opacity duration-300 linear z-40 lg:hidden`}
          onClick={() => setSidebar(false)}
        ></div>
      )}
    </div>
  );
}

export default PrimaryNavbar;
