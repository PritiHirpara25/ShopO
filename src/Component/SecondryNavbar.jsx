import React from "react";
import { useState } from "react";
import { MdChevronRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

function SecondryNavbar() {
  const [toggleCategory, setToggleCategory] = useState(false);
  return (
    <div className="bg-[#ffbb38]">
      <nav className="container mx-auto flex justify-between items-center h-14">

          <div></div>

        {/* nav-link container */}
        <div>
          <ul className="flex gap-8">
            <NavLink to="/"> <li>Home</li></NavLink>
            <NavLink to="/shop"> <li>Shop</li></NavLink>
            <NavLink to="/login"> <li>Login</li></NavLink>
            <NavLink to="/signup"><li>SignUp</li></NavLink>
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
