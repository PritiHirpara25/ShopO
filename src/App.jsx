import './App.css'
<<<<<<< HEAD

=======
import PrimaryNavbar from './Component/PrimaryNavbar'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
>>>>>>> fa6999fa7392bb8a95ef4e86ac5425676dfcf7cb
// import Cards from './Helper/Cards'
import Shop from './Pages/Shop'
import ProductDeatils from './Pages/ProductDeatils';

import Sidebar from './Component/Sidebar'
// import Cards from './Helper/Cards'
import { useState } from 'react'
import Navbar from './Component/Navbar'

function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
<<<<<<< HEAD
   <div >
        <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
       
        {/* <Shop/> */}
=======
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
        <Shop/>
>>>>>>> fa6999fa7392bb8a95ef4e86ac5425676dfcf7cb
        {/* <Cards/> */}
      </div>
    </>
  )
}

export default App
