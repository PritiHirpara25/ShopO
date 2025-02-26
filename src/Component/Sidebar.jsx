  import React from "react";
  import { CiHeart } from "react-icons/ci";
  import { RxCross1 } from "react-icons/rx";
  import { FaSearch } from "react-icons/fa";
  import { CiMobile4 } from "react-icons/ci";
  import { MdChevronRight } from "react-icons/md";
  import { IoGameControllerOutline } from "react-icons/io5";
  import { CiCamera } from "react-icons/ci";
  import { IoCarOutline } from "react-icons/io5";
  import { PiArmchairThin } from "react-icons/pi";
  import { CiBasketball } from "react-icons/ci";
  import { PiCoffeeThin } from "react-icons/pi";
  import { PiTShirtThin } from "react-icons/pi";

  function Sidebar({sidebar,setSidebar}) {
    return (
      <div className={`p-4 w-60  bg-white `}>

        {/* icon container */}
        <div className="flex justify-between items-center">
          {/* heart */}
        <div className="relative ">
          <CiHeart className="size-6" />
          <div className="size-5 rounded-full flex justify-center items-center font-semibold bg-[#ffbb38] absolute bottom-3 left-3">
            <span className="font-light">{0}</span>
          </div>
        </div>
      
      {/* cross  */}
      <div className="size-8 bg-red-500 px-2 rounded-full flex justify-center items-center" onClick={()=>setSidebar(false)}>
      <RxCross1 className="text-white" />
      </div>
        </div>

        {/* search bar */}
        <div className='border border-gray-200 flex justify-between mt-4'>
            <input type="text" placeholder='Search Product...' className=' outline-none px-2 text-[12px] font-semibold'/>
            <button className='bg-[#ffbb38] p-2 font-semibold '><FaSearch className="font-bold"/></button>
          </div>

        {/* category & main menu */}
        <div className="mt-4">
          {/* title */}
          <h3 className="text-md font-semibold"><span className="mr-2">Categories</span>  |  <span className="text-gray-500 ml-2">Main Menu</span></h3>

        {/* category list */}
        <div className=" mt-4 text-sm">
          
          {/* mobile & laptop */}
          <div className="flex justify-between items-center py-4 hover:bg-yellow-200">
          <div className="flex justify-between items-center gap-4">
          <CiMobile4 className="size-6"/>
          <p >Mobile & Laptops</p>
          </div>
          <MdChevronRight/>

          </div>

          {/* gaming Entertainment */}
          <div className="flex justify-between items-center py-4 hover:bg-yellow-200">
          <div className="flex justify-between items-center gap-4">
          <IoGameControllerOutline className="size-6"/>
          <p>Gaming Entertainment</p>
          </div>
          <MdChevronRight/>

          </div>

          {/* image & video */}
          <div className="flex justify-between items-center py-4 hover:bg-yellow-200">
          <div className="flex justify-between items-center gap-4">
          <CiCamera className="size-6"/>
          <p >Camera & Vieo</p>
          </div>
          <MdChevronRight/>

          </div>

          {/* vehicles */}
          <div className="flex justify-between items-center py-4 hover:bg-yellow-200">
          <div className="flex justify-between items-center gap-4">
          <IoCarOutline className="size-6"/>
          <p >Vehicles</p>
          </div>
          <MdChevronRight/>

          </div>

          {/* furnitures */}
          <div className="flex justify-between items-center py-4 hover:bg-yellow-200">
          <div className="flex justify-between items-center gap-4">
          <PiArmchairThin className="size-6"/>
          <p >Furnitures</p>
          </div>
          <MdChevronRight/>

          </div>

          {/* sports */}
          <div className="flex justify-between items-center py-4 hover:bg-yellow-200">
          <div className="flex justify-between items-center gap-4">
          <CiBasketball className="size-6"/>
          <p >Sports</p>
          </div>
          <MdChevronRight/>

          </div>

          {/* food & drinks */}
          <div className="flex justify-between items-center py-4 hover:bg-yellow-200">
          <div className="flex justify-between items-center gap-4">
          <PiCoffeeThin className="size-6"/>
          <p >Food & Drinks</p>
          </div>
          <MdChevronRight/>

          </div>

          {/* fashion Accessories */}
          <div className="flex justify-between items-center py-4 hover:bg-yellow-200">
          <div className="flex justify-between items-center gap-4">
          <PiTShirtThin className="size-6"/>
          <p >Fashion Accessories</p>
          </div>
          <MdChevronRight/>

          </div>

        

        </div>

        </div>
      </div>
    );
  }

  export default Sidebar;
