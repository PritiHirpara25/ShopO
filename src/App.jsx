import './App.css'
import PrimaryNavbar from './Component/PrimaryNavbar'
import Sidebar from './Component/Sidebar'
// import Cards from './Helper/Cards'
import Shop from './Pages/Shop'
import { useState } from 'react'

function App() {
  const[sidebar,setSidebar] = useState(false);

  return (
   <div >
        <PrimaryNavbar sidebar={sidebar} setSidebar={setSidebar}/>
        {/* <Sidebar /> */}
        {/* <Shop/> */}
        {/* <Cards/> */}
    </div>
  )
}

export default App
