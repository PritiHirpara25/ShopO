import React from 'react'
import GameRemote from '../assets/GameRemote.jpg'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { LuRefreshCcw } from "react-icons/lu";
import { AiOutlineFullscreen } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/CartSlice';
import { addToWishList } from '../Redux/WishlistSlice';
import { add_Products } from '../Redux/ProductDetailsSlice';

const Cards = ({ product }) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleTitleClick = (product) => {
        navigate(`/product/${product.id}`);
        dispatch(add_Products(product));
    }

    const ratingStar = [];
    for (let i = 1; i <= Math.ceil(product.rating.rate); i++) {
        ratingStar.push(<MdOutlineStarPurple500 className='text-[#ffbb38] text-xl' />)
    }

    return (
        <div className='relative max-w-96 h-96 p-7 shadow-xl group bg-white'>

            {/* hover icons */}
            <div className='absolute top-12 right-8 z-50 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-5 group-hover:translate-x-0'>
                <CiHeart className='m-2 bg-gray-200 font-bold text-4xl p-1' onClick={() => dispatch(addToWishList(product))} />
                <LuRefreshCcw className='m-2 bg-gray-200 font-bold text-4xl p-1' />
                <AiOutlineFullscreen className='m-2 bg-gray-200 font-bold text-4xl p-1' />
            </div>
            <div className='flex justify-center'>
                <img src={product.image} className='p-5 size-48 my-2' alt="" />
            </div>
            <div>
                <div className='flex mb-2'>
                    {
                        ratingStar.map((product) => {
                            return (
                                product
                            )
                        })
                    }
                </div>
                <div>
                    <p className='line-clamp-2 mb-2 hover:text-blue-600 hover:cursor-pointer' onClick={() => handleTitleClick(product)}>{product.title}</p>
                    <div className='flex gap-x-2'>
                        {/* <del className='text-xl text-gray-400'>{product.discount}</del> */}
                        <span className='text-xl text-red-600 font-bold'>₹ {product.price}</span>
                    </div>
                </div>
            </div>

            {/* hover add to cart button */}
            <div className="absolute bottom-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300  translate-y-5 group-hover:translate-y-0">
                <button className="flex items-center gap-x-3 bg-[#ffbb38] px-9 sm:px-20 lg:px-22 xl:px-20 text-nowrap py-2 cursor-pointer" onClick={() => dispatch(addToCart(product))}>
                    <HiOutlineShoppingBag /> Add To Cart
                </button>
            </div>
        </div>
    )
}

export default Cards