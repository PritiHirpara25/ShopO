import React from 'react'
import Templates from '../Component/Templates'
import Shipping from '../Component/Shipping'
import Coupan from '../Component/Coupan'
import Footer from '../Component/Footer'

const Home = () => {
  return (
   <div className=' mt-8'>
      <Templates />
      <Shipping />
      <Coupan />
      <Footer />
   </div>
  
  )
}

export default Home