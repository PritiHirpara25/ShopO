import React, { useEffect } from 'react'

import Cards from '../Helper/Cards'
import ShopSidebar from '../Component/ShopSidebar'
import Coupan from '../Component/Coupan'
import Footer from '../Component/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../Redux/ProductSlice';

const Shop = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const {data , status,filteredData} = useSelector((state) => state.product);

  return (
    <div className='container mt-10'>

      <div className=' flex '>
        <div>
          <ShopSidebar />
        </div>
        {/* loader */}
        {status === "pending" && <div className=' w-screen h-screen flex justify-center items-center'>
          <div className="spinner"></div></div>}

          {/* products */}
        <div className="grid grid-cols-3 gap-x-8 gap-y-8 mx-10">
          {status === "fulfilled" && filteredData.map((item) => (
            <div key={item.id}>
              <Cards product={item} />
            </div>
          ))}
        </div>
        
        {/* rejected */}
        {status === "rejected" && <p>Rejected</p>}

      </div>

      <div className='mt-36'>
        <Coupan />
        <Footer />
      </div>

    </div>

  )
}

export default Shop;
