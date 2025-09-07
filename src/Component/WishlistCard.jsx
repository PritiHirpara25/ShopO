import { IoClose } from "react-icons/io5";
import { MdOutlineStarPurple500 } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeToWishList } from '../Redux/WishlistSlice';

const WishlistCard = ({ item }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleTitleClick = () => {
        navigate(`/product/${item.id}`);
    }

    return (
        <div>
            <div className='relative max-w-80 h-96 p-7 shadow-xl group bg-white' key={item.id}>
                <div className='relative'>
                    <IoClose className='absolute right-0 text-2xl cursor-pointer hover:text-red-600' onClick={() => dispatch(removeToWishList(item.id))} />
                    <div className='flex justify-center'>
                        <img src={item.image} className='p-5 size-48 my-2' alt="" />
                    </div>
                    <div>
                        <div className='flex mb-2'>
                            <MdOutlineStarPurple500 className='text-[#ffbb38] text-xl' />
                            <MdOutlineStarPurple500 className='text-[#ffbb38] text-xl' />
                            <MdOutlineStarPurple500 className='text-[#ffbb38] text-xl' />
                            <MdOutlineStarPurple500 className='text-[#ffbb38] text-xl' />
                            <MdOutlineStarPurple500 className='text-[#ffbb38] text-xl' />
                        </div>
                        <div>
                            <p className='line-clamp-2 mb-2 hover:text-blue-600 hover:cursor-pointer'
                                onClick={handleTitleClick}
                            >{item.title}</p>
                            <div className='flex gap-x-2'>
                                <span className='text-xl text-red-600 font-bold'>₹ {item.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishlistCard