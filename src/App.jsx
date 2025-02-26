import './App.css'
import PrimaryNavbar from './Component/PrimaryNavbar'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Cards from './Helper/Cards'
import Shop from './Pages/Shop'
import ProductDeatils from './Pages/ProductDeatils';
import Cart from './Pages/Cart'
import Sidebar from './Component/Sidebar'
// import Cards from './Helper/Cards'
import { useState } from 'react'

function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      {/* <PrimaryNavbar /> */}
      <Router>
        <Routes>
          {/* <Route path="/product/:id" element={<ProductDeatils />} /> */}
        </Routes>
      </Router>
      {/* <Shop /> */}
      <div >
        <PrimaryNavbar sidebar={sidebar} setSidebar={setSidebar} />
        {/* <Sidebar /> */}
        {/* <Shop/> */}
        <ProductDeatils/>
        {/* <Cart/> */}
        {/* <Cards/> */}
      </div>
    </>
  )
}

export default App
