import React, { useEffect, useState } from 'react'
import Cards from '../Helper/Cards'
import ShopSidebar from '../Component/ShopSidebar'
import Coupan from '../Component/Coupan'
import Footer from '../Component/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../Redux/ProductSlice';
import { CiFilter } from "react-icons/ci";

const Shop = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const { data, status, filteredData } = useSelector((state) => state.product);



  return (
    <div>

      <div className='container pt-10 mx-auto'>
        <div className='flex flex-col gap-2 md:flex-row'>
          <div className='hidden lg:block'>
             <ShopSidebar/>
          </div>

          {/* loader */}
          {status === "pending" && <div className=' w-screen h-screen flex justify-center items-center'>
            <div className="spinner"></div></div>}

          {/* products */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 lg:gap-x-4 xl:gap-x-6 gap-y-8 mx-10 ">
            {status === "fulfilled" && filteredData.map((item) => (
              <div key={item.id}>
                <Cards product={item} />
              </div>
            ))}
          </div>

          {/* rejected */}
          {status === "rejected" && <p>Rejected</p>}

        </div>
      </div>

      <div className='mt-36'>
        <Coupan />
        <Footer />
      </div>
    </div>

  )
}

export default Shop;
