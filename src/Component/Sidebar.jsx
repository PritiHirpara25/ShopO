import { CiHeart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoIosLogIn } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShopSidebar from "./ShopSidebar";

function Sidebar({ sidebar, setSidebar }) {

  const wishlistData = useSelector(state => state.wishlist);
  const navigate = useNavigate();

  return (
    <div className={`bg-white sm:w-60`}>

      {/* icon container */}
      <div className="flex justify-between items-center p-4">
        <div className="flex gap-3">
          {/* heart */}
          <div className="relative">
            <CiHeart className="size-6" onClick={() => navigate('/wishlist')} />
            <div className="size-5 rounded-full flex justify-center items-center font-semibold bg-[#ffbb38] absolute bottom-3 left-3">
              <span className="font-light">{wishlistData.length}</span>
            </div>
          </div>
          {/* Home */}
          <div>
            <GoHome className="size-6" onClick={() => navigate('/')} />
          </div>
          {/* shop */}
          <div>
            <IoBagOutline className="size-5.5 " onClick={() => navigate('/shop')} />
          </div>
          {/* Login */}
          <div>
            <IoIosLogIn className="size-5.5 " onClick={() => navigate('/login')} />
          </div>
        </div>

        {/* cross  */}
        <div className="size-8 bg-red-500 px-2 rounded-full flex justify-center items-center" onClick={() => setSidebar(false)}>
          <RxCross1 className="text-white" />
        </div>
      </div>

      {/* search bar */}
      <div className='border border-gray-200 flex justify-between mt-4 m-4'>
        <input type="text" placeholder='Search Product...' className=' outline-none px-2 text-[12px] font-semibold' />
        <button className='bg-[#ffbb38] p-2 font-semibold '><FaSearch className="font-bold" /></button>
      </div>

      {/* category*/}
      <div className="relative">
        <ShopSidebar />
      </div>
    </div>
  );
}

export default Sidebar;
