import React from 'react'
import { useSelector } from 'react-redux'

const Wishlist = () => {

    const wishlistData = useSelector(state => state.Wishlist)

  return (
    <div>
        {/* {wishlistData.map} */}
    </div>
  )
}

export default Wishlist