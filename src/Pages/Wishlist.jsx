import React from 'react'
import { MdOutlineStarPurple500 } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import WishlistCard from '../Component/WishlistCard';

const Wishlist = () => {

  const wishlistData = useSelector(state => state.wishlist)

  return (
    <div className="mt-10">
      {wishlistData.length === 0 ? <NoWishlist /> : <div className='grid grid-cols-3 gap-x-8 gap-y-8 border '>{wishlistData.map((item) => {
        return (
          <WishlistCard key={item.id} item={item} />
        )
      })}</div>}
    </div>
  )
}
export default Wishlist


const NoWishlist = () => {
  const navigate = useNavigate();

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-3'>
        <p className='text-2xl'>No Product Available</p>
        <button onClick={() => navigate('/shop')} className='btn'>Go to Shop</button>
    </div>
  )
}

