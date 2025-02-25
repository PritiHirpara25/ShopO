import React from 'react'
import GameRemote from '../assets/GameRemote.jpg'
// import GameRemote from '../assets/GameRemote.jpg'
import Cards from '../Helper/Cards'

const Shop = () => {

  const card = [
    { id: 1, image: GameRemote, title: "Xoggle aute et pariatur adipisicing nostrud et excepteur", discount: "$25.55", price: "$24.99" },
    { id: 2, image: GameRemote, title: "Xoggle aute et pariatur adipisicing nostrud et excepteur", discount: "$25.55", price: "$24.99" },
    { id: 3, image: GameRemote, title: "Xoggle aute et pariatur adipisicing nostrud et excepteur", discount: "$25.55", price: "$24.99" },
    { id: 4, image: GameRemote, title: "Xoggle aute et pariatur adipisicing nostrud et excepteur", discount: "$25.55", price: "$24.99" },
    { id: 5, image: GameRemote, title: "Xoggle aute et pariatur adipisicing nostrud et excepteur", discount: "$25.55", price: "$24.99" },
    { id: 6, image: GameRemote, title: "Xoggle aute et pariatur adipisicing nostrud et excepteur", discount: "$25.55", price: "$24.99" },
    { id: 7, image: GameRemote, title: "Xoggle aute et pariatur adipisicing nostrud et excepteur", discount: "$25.55", price: "$24.99" }
  ]

  return (
    <div>

      <div className='grid grid-cols-4'>
        {card.map((item) => (
          <Cards key={item.id} product={item} />
        )
        )
        }
      </div>
      {/* <img src={GameRemote} alt="" /> */}
    </div>
  )
}

export default Shop