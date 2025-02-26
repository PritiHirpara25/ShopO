import './App.css'
import PrimaryNavbar from './Component/PrimaryNavbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Cards from './Helper/Cards'
import Shop from './Pages/Shop'
import ProductDeatils from './Pages/ProductDeatils';

function App() {

  return (
    <>
        <PrimaryNavbar/>
        <Router>
          <Routes>
          {/* <Route path="/product/:id" element={<ProductDeatils />} /> */}
          </Routes>
        </Router>
        <Shop/>
        {/* <Cards/> */}
    </>
  )
}

export default App
