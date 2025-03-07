import React from 'react'
import game_remote from "../assets/GameRemote.jpg";
import { useDispatch } from 'react-redux';
import { removeToCart } from '../Redux/CartSlice';
import { IoClose } from 'react-icons/io5';

function CartHoverProduct({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-1 m-2">

      <div className="flex gap-4 py-2 ">
        <div className="w-1/3">
          <img src={product.image} alt="remote_image" className="size-16" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="hover:text-blue-500 text-sm font-medium">iPhone 12 Pro Max 128 GB Golen Color</p>
          <p className="text-red-500 font-semibold">₹38</p>
        </div>
      </div>

      <div className="text-gray-400 my-2">
        <IoClose />
      </div>

    </div>
  )
}

export default CartHoverProduct
