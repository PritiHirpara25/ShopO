import './App.css'
import PrimaryNavbar from './Component/PrimaryNavbar'
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Cards from './Helper/Cards'
import Shop from './Pages/Shop'
import ProductDeatils from './Pages/ProductDeatils';
=======
import Sidebar from './Component/Sidebar'
// import Cards from './Helper/Cards'
import Shop from './Pages/Shop'
import { useState } from 'react'
>>>>>>> 6337e416d6dbdfd72aeb2785b93bc434da6503b6

function App() {
  const[sidebar,setSidebar] = useState(false);

  return (
<<<<<<< HEAD
    <>
        <PrimaryNavbar/>
        <Router>
          <Routes>
          {/* <Route path="/product/:id" element={<ProductDeatils />} /> */}
          </Routes>
        </Router>
        <Shop/>
=======
   <div >
        <PrimaryNavbar sidebar={sidebar} setSidebar={setSidebar}/>
        {/* <Sidebar /> */}
        {/* <Shop/> */}
>>>>>>> 6337e416d6dbdfd72aeb2785b93bc434da6503b6
        {/* <Cards/> */}
    </div>
  )
}

export default App
