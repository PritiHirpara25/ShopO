import React from 'react'
import GameRemote from '../assets/GameRemote.jpg';
import HeadPhone from '../assets/HeadPhone.jpg';
import Cards from '../Helper/Cards'
import ShopSidebar from '../Component/ShopSidebar'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDeatils from './ProductDeatils'

const Shop = () => {

  const card = [
    { id: 1, image: GameRemote, title: "Xoggle aute et pariatur adipisicing nostrud et excepteur", discount: "$25.55", price: "$24.99" },
    { id: 2, image: HeadPhone, title: "Xoggle aute et pariatur adipisicing nostrud et excepteur", discount: "$25.55", price: "$24.99" },
    { id: 3, image: GameRemote, title: "Xoggle aute et pariatur adipisicing nostrud et excepteur", discount: "$25.55", price: "$24.99" },
    { id: 4, image: GameRemote, title: "Xoggle aute et pariatur adipisicing nostrud et excepteur", discount: "$25.55", price: "$24.99" },
    { id: 5, image: GameRemote, title: "Xoggle aute et pariatur adipisicing nostrud et excepteur", discount: "$25.55", price: "$24.99" },
    { id: 6, image: GameRemote, title: "Xoggle aute et pariatur adipisicing nostrud et excepteur", discount: "$25.55", price: "$24.99" },
    { id: 7, image: GameRemote, title: "Xoggle aute et pariatur adipisicing nostrud et excepteur", discount: "$25.55", price: "$24.99" },
    { id: 8, image: GameRemote, title: "Xoggle aute et pariatur adipisicing nostrud et excepteur", discount: "$25.55", price: "$24.99" },
    { id: 9, image: GameRemote, title: "Xoggle aute et pariatur adipisicing nostrud et excepteur", discount: "$25.55", price: "$24.99" },
    { id: 10, image: GameRemote, title: "Xoggle aute et pariatur adipisicing nostrud et excepteur", discount: "$25.55", price: "$24.99" },
    { id: 11, image: GameRemote, title: "Xoggle aute et pariatur adipisicing nostrud et excepteur", discount: "$25.55", price: "$24.99" },
    { id: 12, image: GameRemote, title: "Xoggle aute et pariatur adipisicing nostrud et excepteur", discount: "$25.55", price: "$24.99" },
    { id: 13, image: GameRemote, title: "Xoggle aute et pariatur adipisicing nostrud et excepteur", discount: "$25.55", price: "$24.99" },
    { id: 14, image: GameRemote, title: "Xoggle aute et pariatur adipisicing nostrud et excepteur", discount: "$25.55", price: "$24.99" },
    { id: 15, image: GameRemote, title: "Xoggle aute et pariatur adipisicing nostrud et excepteur", discount: "$25.55", price: "$24.99" }
  ]

  return (
    <Router>
      <div className='container flex mt-10'>

        <div>
          <ShopSidebar />
        </div>

        <div className='grid grid-cols-3 gap-x-8 gap-y-8 mx-10'>
          {card.map((item) => (
            <div>
              <Cards key={item.id} product={item} />
              {/* <div className='flex justify-center'>
              <button className='flex items-center gap-x-3 bg-yellow-400 px-20 py-2 absolute bottom-0'><HiOutlineShoppingBag />Add To Cart</button>
            </div> */}
            </div>
          )
          )
          }
        </div>
        <Routes>
          <Route path="/product/:id" element={<ProductDeatils />} />
        </Routes>
      </div>
    </Router>
  )
}

export default Shop