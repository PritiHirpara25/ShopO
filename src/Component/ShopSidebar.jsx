import React from 'react'
import { FiPlus } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { filterProduct } from '../Redux/ProductSlice';
import { useState , useEffect } from 'react';

const ShopSidebar = () => {
    const [checkedCategory,setCheckedcategory] = useState([]);

    const categoryData = [
        {
            id:1,
            category:"men's clothing"
        },
        {
            id:2,
            category:"jewelery"
        },
        {
            id:3,
            category:"electronics"
        },
        {
            id:4,
            category:"women's clothing"
        },
        
    ]

    const dispatch = useDispatch();

    const handleInputChange = (e,payload)=>{
        if(e.target.checked){
            setCheckedcategory([...checkedCategory,payload]);
        }
        else{
            setCheckedcategory((prev)=>prev.filter((category)=> category !== payload));

        }
    }

    useEffect(()=>{
        dispatch(filterProduct(checkedCategory));

    },[dispatch,checkedCategory])

    return (
        <div className='shadow-2xl w-72 p-9'>

            {/* dynamic Product Category */}
            <div>
            <h3 className='font-medium my-4'>Product Categories</h3>
            
            {
                categoryData.map((item)=>(
                    <div className='flex items-center justify-between my-7' key={item.id}>
                    <div className='flex items-center space-x-3'>
                        <input type="checkbox" onChange={(e)=>handleInputChange(e,item.category)}/>
                        <p className='text-sm'>{item.category}</p>
                    </div>
                    <FiPlus className='text-gray-400'/>
                </div>
                ))
            }

            </div>

            {/* Static Product Categories */}
            {/* <div>
                <h3 className='font-medium my-4'>Product Categories</h3>
                    
                <div className='flex items-center justify-between my-7'>
                    <div className='flex items-center space-x-3'>
                        <input type="checkbox" />
                        <p className='text-sm'>Mobile & Laptops</p>
                    </div>
                    <FiPlus className='text-gray-400' />
                </div>

                <div className='flex items-center justify-between my-7'>
                    <div className='flex items-center space-x-3'>
                        <input type="checkbox" />
                        <p className='text-sm'>Gaming & Entertainment</p>
                    </div>
                    <FiPlus className='text-gray-400' />
                </div>

                <div className='flex items-center justify-between my-7'>
                    <div className='flex items-center space-x-3'>
                        <input type="checkbox" />
                        <p className='text-sm'>Image & Video</p>
                    </div>
                    <FiPlus className='text-gray-400' />
                </div>

                <div className='flex items-center justify-between my-7'>
                    <div className='flex items-center space-x-3'>
                        <input type="checkbox" />
                        <p className='text-sm'>Vehicles</p>
                    </div>
                    <FiPlus className='text-gray-400' />
                </div>

                <div className='flex items-center justify-between my-7'>
                    <div className='flex items-center space-x-3'>
                        <input type="checkbox" />
                        <p className='text-sm'>Furnitures</p>
                    </div>
                    <FiPlus className='text-gray-400' />
                </div>

                <div className='flex items-center justify-between my-7'>
                    <div className='flex items-center space-x-3'>
                        <input type="checkbox" />
                        <p className='text-sm'>Sport</p>
                    </div>
                    <FiPlus className='text-gray-400' />
                </div>

                <div className='flex items-center justify-between my-7'>
                    <div className='flex items-center space-x-3'>
                        <input type="checkbox" />
                        <p className='text-sm'>Food & Drinks</p>
                    </div>
                    <FiPlus className='text-gray-400' />
                </div>

                <div className='flex items-center justify-between my-7'>
                    <div className='flex items-center space-x-3'>
                        <input type="checkbox" />
                        <p className='text-sm'>Fashin Accessories</p>
                    </div>
                    <FiPlus className='text-gray-400' />
                </div>

                <div className='flex items-center justify-between my-7'>
                    <div className='flex items-center space-x-3'>
                        <input type="checkbox" />
                        <p className='text-sm'>Toilet & Sanitation</p>
                    </div>
                    <FiPlus className='text-gray-400' />
                </div>

                <div className='flex items-center justify-between my-7'>
                    <div className='flex items-center space-x-3'>
                        <input type="checkbox" />
                        <p className='text-sm'>Makeup Corner</p>
                    </div>
                    <FiPlus className='text-gray-400' />
                </div>

                <div className='flex items-center justify-between my-7'>
                    <div className='flex items-center space-x-3'>
                        <input type="checkbox" />
                        <p className='text-sm'>Baby Items</p>
                    </div>
                    <FiPlus className='text-gray-400' />
                </div>

            </div> */}

            <hr className='text-gray-300 my-12' />

            {/* Price Range */}
            {/* <div>
                <h3 className='font-medium my-4'>Price Range</h3>
            </div> */}

            {/* <hr className='text-gray-300 my-12' /> */}

            {/* Brands */}
            {/* <div>
                <h3 className='font-medium my-4'>Brands</h3>

                <div className='flex items-center my-7 space-x-3'>
                    <input type="checkbox" />
                    <p className='text-sm'>Apple</p>
                </div>

                <div className='flex items-center my-7 space-x-3'>
                    <input type="checkbox" />
                    <p className='text-sm'>Samsung</p>
                </div>

                <div className='flex items-center my-7 space-x-3'>
                    <input type="checkbox" />
                    <p className='text-sm'>Walton</p>
                </div>

                <div className='flex items-center my-7 space-x-3'>
                    <input type="checkbox" />
                    <p className='text-sm'>Oneplus</p>
                </div>

                <div className='flex items-center my-7 space-x-3'>
                    <input type="checkbox" />
                    <p className='text-sm'>Vivo</p>
                </div>

                <div className='flex items-center my-7 space-x-3'>
                    <input type="checkbox" />
                    <p className='text-sm'>Oppo</p>
                </div>

                <div className='flex items-center my-7 space-x-3'>
                    <input type="checkbox" />
                    <p className='text-sm'>Xiomi</p>
                </div>

                <div className='flex items-center my-7 space-x-3'>
                    <input type="checkbox" />
                    <p className='text-sm'>Other</p>
                </div>

            </div> */}

            {/* <hr className='text-gray-300 my-12' /> */}

            {/* Storage */}
            {/* <div>
                <h3 className='font-medium my-4'>Storage</h3>
                <div className='flex flex-wrap'>
                    <p className='text-gray-400 text-sm border border-gray-300 w-fit px-3 py-0.5 m-0.5'>64GB</p>
                    <p className='text-gray-400 text-sm border border-gray-300 w-fit px-3 py-0.5 m-0.5'>128GB</p>
                    <p className='text-gray-400 text-sm border border-gray-300 w-fit px-3 py-0.5 m-0.5'>256GB</p>
                    <p className='text-gray-400 text-sm border border-gray-300 w-fit px-3 py-0.5 m-0.5'>512GB</p>
                    <p className='text-gray-400 text-sm border border-gray-300 w-fit px-3 py-0.5 m-0.5'>1024GB</p>
                </div>
            </div> */}

            {/* <hr className='text-gray-300 my-12' /> */}

            {/* Sizes */}
            {/* <div>
                <h3 className='font-medium my-4'>Sizes</h3>

                <div className='flex items-center my-7 space-x-3'>
                    <input type="checkbox" />
                    <p className='text-sm'>S</p>
                </div>

                <div className='flex items-center my-7 space-x-3'>
                    <input type="checkbox" />
                    <p className='text-sm'>M</p>
                </div>

                <div className='flex items-center my-7 space-x-3'>
                    <input type="checkbox" />
                    <p className='text-sm'>XL</p>
                </div>

                <div className='flex items-center my-7 space-x-3'>
                    <input type="checkbox" />
                    <p className='text-sm'>XXL</p>
                </div>

                <div className='flex items-center my-7 space-x-3'>
                    <input type="checkbox" />
                    <p className='text-sm'>Sliem Fit</p>
                </div>

            </div> */}

        </div>
    )
}

export default ShopSidebar