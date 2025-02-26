import './App.css'

// import Cards from './Helper/Cards'
import Shop from './Pages/Shop'
import { useState } from 'react'
import Navbar from './Component/Navbar'

function App() {
  const[sidebar,setSidebar] = useState(false);

  return (
   <div >
        <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
       
        {/* <Shop/> */}
        {/* <Cards/> */}
    </div>
  )
}

export default App
