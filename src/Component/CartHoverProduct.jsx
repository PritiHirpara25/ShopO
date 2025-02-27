import React from 'react'
import game_remote from "../assets/GameRemote.jpg";

function CartHoverProduct() {
  return (
    <div className="flex gap-4">

    <div className="flex gap-2 py-2 ">
    <div className="w-1/3">
       <img src={game_remote} alt="remote_image" className="size-16"/>
     </div>
     <div className="flex flex-col gap-2">
       <p className="hover:text-blue-500 text-[12px] font-medium">iPhone 12 Pro Max 128 GB Golen Color</p>
       <p className="text-red-500">$38</p>
     </div>
    </div>

     <div className="text-gray-400">
       X
     </div>

   </div>
  )
}

export default CartHoverProduct
