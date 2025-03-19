import React from 'react'
import { FiPlus } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { filterProduct } from '../Redux/ProductSlice';
import { useState, useEffect } from 'react';

const ShopSidebar = () => {
    const [checkedCategory, setCheckedcategory] = useState([]);
    const categoryData = [
        {
            id: 1,
            category: "men's clothing"
        },
        {
            id: 2,
            category: "jewelery"
        },
        {
            id: 3,
            category: "electronics"
        },
        {
            id: 4,
            category: "women's clothing"
        },

    ]

    const dispatch = useDispatch();

    const handleInputChange = (e, payload) => {
        if (e.target.checked) {
            setCheckedcategory([...checkedCategory, payload]);
        }
        else {
            setCheckedcategory((prev) => prev.filter((category) => category !== payload));

        }
    }

    useEffect(() => {
        dispatch(filterProduct(checkedCategory));

    }, [dispatch, checkedCategory])

    return (
        <div>
            <div className={`shadow-2xl sm:w-60 xl:w-64 p-9  `}>

                {/* dynamic Product Category */}
                <div>
                    <h3 className='font-medium my-4'>Product Categories</h3>

                    {
                        categoryData.map((item) => (
                            <div className='flex items-center justify-between my-7' key={item.id}>
                                <div className='flex items-center space-x-3'>
                                    <input type="checkbox" onChange={(e) => handleInputChange(e, item.category)} />
                                    <p className='text-sm'>{item.category}</p>
                                </div>
                                <FiPlus className='text-gray-400' />
                            </div>
                        ))
                    }

                </div>
                <hr className='text-gray-300 my-12' />
            </div>
        </div>

    )
}

export default ShopSidebar