import React from 'react'
import GameRemote from '../assets/GameRemote.jpg'
import { MdOutlineStarPurple500 } from "react-icons/md";

const Cards = ({product}) => {
    return (
        <div className='border-2 max-w-80 p-7 shadow-xl'>
            <div>
                <img src={product.image} className='p-5' alt="" />
            </div>
            <div>
                <div className='flex mb-2'>
                    <MdOutlineStarPurple500 className='text-yellow-400 text-xl' />
                    <MdOutlineStarPurple500 className='text-yellow-400 text-xl' />
                    <MdOutlineStarPurple500 className='text-yellow-400 text-xl' />
                    <MdOutlineStarPurple500 className='text-yellow-400 text-xl' />
                    <MdOutlineStarPurple500 className='text-yellow-400 text-xl' />
                </div>
                <div>
                    <p className='line-clamp-2 mb-2 hover:text-blue-600'>{product.title}</p>
                    {/* <p class="title mb-2 text-[15px] font-600 text-qblack leading-[24px] line-clamp-2 hover:text-blue-600">Xoggle aute et pariatur adipisicing nostrud et excepteur</p> */}
                    <div className='flex gap-x-2'>
                        <del className='text-xl text-gray-400'>{product.discount}</del>
                        <span className='text-xl text-red-600 font-bold'>{product.price}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards