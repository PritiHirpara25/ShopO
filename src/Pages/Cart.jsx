import React from 'react'
import GameRemote from '../assets/GameRemote.jpg';
import HeadPhone from '../assets/HeadPhone.jpg';

const Cart = () => {

  const CartData = [
      { id: 1, image: GameRemote, title: "iPhone 12 Pro Max 128GB", size:"small", price: "$24.99" },
      { id: 2, image: HeadPhone, title: "iPhone 12 Pro Max 128GB",size:"small", price: "$24.99" },
      { id: 3, image: GameRemote, title: "iPhone 12 Pro Max 128GB",size:"small", price: "$24.99" },
      { id: 4, image: GameRemote, title: "iPhone 12 Pro Max 128GB",size:"small", price: "$24.99" }
  ]
  return (
    <div>
      {/* Cart Heading */}
      <div className='bg-[#fffaef] flex justify-center'>
        <p className='font-bold text-3xl my-20'>Your Cart</p>
      </div>

    {/* Cart data in table form */}
      <div className='mx-52'>
          <thead>
            <tr className='bg-gray-300 text-sm m-8'>
              <th>PRODUCT</th>
              <th>COLOR</th>
              <th>SIZE</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
            </tr>
          </thead>
        <tbody>
          {
            CartData.map((item) => {
              <tr>
                <td>{item.image}{item.title}</td> 
                <td></td>
                <td>{item.size}</td>
                <td>{item.price}</td>
                <td></td>
              </tr>
            })
          }
        </tbody>
      </div>
    </div>
  )
}

export default Cart