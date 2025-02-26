import React from 'react'
import GameRemote from '../assets/GameRemote.jpg'
import { useParams } from 'react-router-dom'

const ProductDeatils = () => {

  const {id} = useParams;

  const ProductData = [{ id: 1, image: GameRemote, title: "Xoggle aute et pariatur adipisicing nostrud et excepteur", discount: "$25.55", price: "$24.99" }]

  return (
    <div>
      {ProductData.map((item) => {
        return(
          <>
            <h1>{item.title}</h1>
            <img src={item.image} alt="" />
            <p>{item.discount}</p>
            <p>{item.price}</p>
          </>
        )
      })}
    </div>
  )
}

export default ProductDeatils