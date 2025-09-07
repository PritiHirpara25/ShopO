import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import WishlistCard from '../Component/WishlistCard';

const Wishlist = () => {

  const wishlistData = useSelector(state => state.wishlist)

  return (
    <div className="pt-10 container mx-auto">
      {wishlistData.length === 0 ? <NoWishlist /> : <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-20 mx-auto px-5'>{wishlistData.map((item) => {
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

